import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
    <div
        style={{
            margin: '0 auto',
            width: '100%',
            padding: 0,
            backgroundColor: '#eaeaea'
        }}
    >
        <iframe
            style={{
                width: '100%',
                border: 0,
                minHeight: 'calc(100vh - 70px)',
                marginBottom: 0,
                overflowY: 'hidden'
            }}
            src="https://app.powerbi.com/view?r=eyJrIjoiMWU2YzQzNjMtZmU5Yi00MDRmLWE3YTctZTFhNDhmY2M2YTU0IiwidCI6IjQwOGNlNzM5LTVjMTctNGZkNS1iMDcwLTY5YzZiMmRjN2E4ZCIsImMiOjh9"
        />
    </div>
);

export default IndexPage;
