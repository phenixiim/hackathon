#!/bin/bash -eu

echo "Running build"
gatsby build
echo "Cleaning bucket"
aws s3 rm s3://nku-hackaton --recursive --profile personal
echo "Uploading new content"
aws s3 cp public/ s3://nku-hackaton --acl public-read --recursive --profile personal
echo "Done"