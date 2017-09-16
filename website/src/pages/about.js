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
        <ul>
            <li><a href="http://data.mfcr.cz/cs/dataset/centralni-registr-administrativnich-budov" target="_blank">Centrální registr administrativních budov (MF)</a></li>
            <li><a href="https://data.cssz.cz/documentation/prehled-o-celkovem-poctu-osvc-podle-okresu" target="_blank">OSVČ (ČSSZ)</a></li>
            <li><a href="http://vdp.cuzk.cz" target="_blank">Registr územní identifikace, adres a nemovitostí (ČUZK)</a></li>
            <li><a href="https://www.czso.cz/csu/czso/uchazeci-o-zamestnani-dosazitelni-a-podil-nezamestnanych-osob-podle-obci_090417" target="_blank">Uchazeči o zaměstnání dosažitelní a podíl nezaměstnaných osob podle obcí (ČZSO)</a></li>
        </ul>
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
