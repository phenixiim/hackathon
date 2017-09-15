import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
    <div
        style={{
            margin: '0 auto',
            width: '100%',
            padding: 0
        }}
    >
        <iframe
            style={{
                width: '100%',
                border: 0,
                minHeight: '80vh'
            }}
            src="https://app.powerbi.com/view?r=eyJrIjoiZjc0NGVjMzAtMTQ4Zi00ZWJlLTllZDUtZGFjMjZiYzk4YjVkIiwidCI6IjQwOGNlNzM5LTVjMTctNGZkNS1iMDcwLTY5YzZiMmRjN2E4ZCIsImMiOjh9"
        />
    </div>
);

export default IndexPage;
