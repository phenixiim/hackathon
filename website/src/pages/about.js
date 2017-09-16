import React from 'react';
import Link from 'gatsby-link';

const AboutPage = () => (
    <div
        style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: '1rem'
        }}
    >
        <h2>Cíl</h2>
        <p>TODO</p>
        <h2>Použité datové sady</h2>
        <p>TODO</p>
        <h2>Autoři:</h2>
        <ul>
            <li>Dalibor Jaroš</li>
            <li>Michal Haták</li>
            <li>Martin Hlaváč</li>
            <li>Vojta Nitra</li>
        </ul>
        <Link to="/">
            <i className="fa fa-chevron-left" /> Zpět na hlavní stránku
        </Link>
    </div>
);

export default AboutPage;
