import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.css';
import 'font-awesome/css/font-awesome.css';

const Header = () => (
    <div
        style={{
            background: '#1ABC9C'
        }}
    >
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '0.5rem 0.5rem'
            }}
        >
            <div
                className="menu"
                style={{
                    float: 'right'
                }}
            >
                <ul>
                    <li>
                        <Link to="/">Hlavní stránka</Link>
                    </li>
                    <li>
                        <Link to="/help/">Jak používat</Link>
                    </li>
                    <li>
                        <Link to="/about/">O projektu</Link>
                    </li>
                </ul>
            </div>
            <h1 style={{ margin: 0, display: 'inline' }}>
                <Link
                    to="/"
                    style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}
                >
                    <i className="fa fa-wpexplorer" /> NKU Hackaton <small>2017</small>
                </Link>
            </h1>
        </div>
    </div>
);

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet
            title="NKU Hackaton"
            meta={[
                { name: 'description', content: 'NKU hackaton project' },
                { name: 'keywords', content: 'NKU hackton project #hackujstat' }
            ]}
        />
        <Header />
        {children()}
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;
