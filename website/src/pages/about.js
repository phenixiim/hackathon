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
        <p>
            Pokus o rychlou vizualizaci dat o státních administrativních budovách a dalších souvisejících údajích s minimálními nároky na realizaci.
        </p>
        <h2>Řešení</h2>
        <p>
            Interkativní zobrazení dat na základě vydolování přes (My)SQL pomocí analytického nástroje:<br/>
            <a href="https://powerbi.microsoft.com/" target="_blank">Microsoft Power BI</a>.
        </p>
        <h2>Výsledek</h2>
        <p>
            Různé datové sady nejsou propojené a obsahují množství chyb.<br/>
            S využitím vhodných nástrojů a postupů může být zpracování a zobrazení dat velmi jednoduché, levné a efektivní.
        </p>
        <h2>Použité datové sady</h2>
        <ul>
            <li><a href="http://data.mfcr.cz/cs/dataset/centralni-registr-administrativnich-budov" target="_blank">Centrální registr administrativních budov (MF)</a></li>
            <li><a href="https://data.cssz.cz/documentation/prehled-o-celkovem-poctu-osvc-podle-okresu" target="_blank">OSVČ (ČSSZ)</a></li>
            <li><a href="http://vdp.cuzk.cz" target="_blank">Registr územní identifikace, adres a nemovitostí (ČUZK)</a></li>
            <li><a href="https://www.czso.cz/csu/czso/uchazeci-o-zamestnani-dosazitelni-a-podil-nezamestnanych-osob-podle-obci_090417" target="_blank">Uchazeči o zaměstnání dosažitelní a podíl nezaměstnaných osob podle obcí (ČZSO)</a></li>
        </ul>
       <p><i>Pozn.: všechny datové sady jsou z období let 2011, resp. 2015</i></p>
        <h2>Autoři:</h2>
        <ul>
            <li><a href="https://www.linkedin.com/in/dalibor-jaroš-597b7189/" target="_blank">Dalibor Jaroš</a></li>
            <li><a href="https://www.linkedin.com/in/twista/" target="_blank">Michal Haták</a></li>
            <li><a href="https://www.linkedin.com/in/hlavacm/" target="_blank">Martin Hlaváč</a></li>
            <li><a href="https://www.linkedin.com/in/vojtěch-nitra-15814b58/" target="_blank">Vojta Nitra</a></li>
        </ul>
        <Link to="/">
            <i className="fa fa-chevron-left" /> Zpět na hlavní stránku
        </Link>
    </div>
);

export default AboutPage;
