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
            Základem je vizualizace dat z Centrálního registru administrativních budov (posktytovatel MF ČR). A dále k těmto datům relevantně přidat další datasety, které půjdou připojit (v závislosti na kvalitě).
        </p>
        <h2>Řešení</h2>
        <p>
            Hlavní technologií pro interaktivní zobrazení dat je <a href="https://powerbi.microsoft.com/" target="_blank">Microsoft Power BI</a>. Power BI umožňuje export
            v podobě embed iframe. Ten je zasazen do statické prezentace (<a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a>) na AWS S3.
        </p> 
        <p>
            MS Power BI umožňuje použít pro zdroj dat širokou variaci zdrojů. My jsme použili MariaDB (v rámci AWS RDS), pro kterou jsme zpracovali níže zmíněné datasety.<br />
            Pro zpracování dat z datasetů bylo použito PHP a Python (Pandas).
        </p>
        <h2>Výsledek</h2>
        <p>
            Největším problémem dat je jejich čistota a standardizace. V rámci datových setů se kterými jsme pracovali se nám povedlo data zpracovat, částečně vyčistit a hlavně spojit.
            I přes existenci Registru územní identifikace, adres a nemovitostí (<a href="http://www.cuzk.cz/Uvod/Produkty-a-sluzby/RUIAN/RUIAN-(1).aspx" target="_blank">RÚIAN</a>), mnoho datasetů tato data nepoužívá, případně pouze omezeně. Dále bohužel některé datasety nejsou kompletní, případně se zde nacházejí chybovosti, které mohou zanést odchylku do prezentovaných hodnot.
            <br />
            S využitím vhodných nástrojů a postupů může být zpracování a zobrazení dat velmi jednoduché, levné a efektivní.
            <br />
            Datové podklady a výstup webu jsou dostupné na <a href="https://github.com/phenixiim/hackathon" target="_blank"><i className="fa fa-github"></i> Githubu</a>.
        </p>
        <h2>Použité datové sady</h2>
        <ul>
            <li><a href="http://data.mfcr.cz/cs/dataset/centralni-registr-administrativnich-budov" target="_blank">Centrální registr administrativních budov (MF ČR)</a> [2015]</li>
            <li><a href="https://data.cssz.cz/documentation/prehled-o-celkovem-poctu-osvc-podle-okresu" target="_blank">Přehled o celkovém počtu OSVČ (ČSSZ)</a> [2010-2017]</li>
            <li><a href="http://vdp.cuzk.cz" target="_blank">Registr územní identifikace, adres a nemovitostí (ČUZK)</a> [2015]</li>
            <li><a href="https://www.czso.cz/csu/czso/uchazeci-o-zamestnani-dosazitelni-a-podil-nezamestnanych-osob-podle-obci_090417" target="_blank">Uchazeči o zaměstnání dosažitelní a podíl nezaměstnaných osob podle obcí (ČZSO)</a> [2015-2017]</li>
            <li><a href="https://nkod.opendata.cz/datov%C3%A1-sada?iri=https%3A%2F%2Fnkod.opendata.cz%2Fzdroj%2Fdatov%C3%A1-sada%2F240789" target="_blank">Základní výsledky Sčítání lidu, domů a bytů (ČSÚ)</a> [2011]</li>
            <li><a href="http://portal.chmi.cz/historicka-data/pocasi/uzemni-teploty" target="_blank">Územní teploty (ČHMÚ)</a> [2015-2017]</li>
        </ul>
        <h2>Autoři</h2>
        <ul>
            <li><a href="https://www.linkedin.com/in/dalibor-jaroš-597b7189/" target="_blank">Dalibor Jaroš</a></li>
            <li><a href="https://www.linkedin.com/in/twista/" target="_blank">Michal Haták</a></li>
            <li><a href="https://www.linkedin.com/in/hlavacm/" target="_blank">Martin Hlaváč</a></li>
            <li><a href="https://www.linkedin.com/in/vojtěch-nitra-15814b58/" target="_blank">Vojta Nitra</a></li>
        </ul>
        <hr />
        <Link to="/">
            <i className="fa fa-chevron-left" /> Zpět na vizualizaci
        </Link>
    </div>
);

export default AboutPage;
