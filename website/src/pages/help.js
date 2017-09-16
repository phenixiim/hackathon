import React from 'react';
import Link from 'gatsby-link';
import zoominimg from './assets/zoomin.png';
import zoomouzimg from './assets/zoomout.png';
import detailsimg from './assets/details.png';
import searchimg from './assets/search.png';

const HelpPage = () => (
    <div
        style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: '1rem'
        }}
    >
        <h2>Jak aplikaci používat?</h2>
        <p>
            Na naždé stránce jsou vždy všechny (4) boxy provázené, takže výběr libovolného pole ovlivní přefiltrování i zbytku ostatních dat na stránce.
        </p>
        <h2>Nápověda</h2>
        <img src={zoominimg} alt="přiblížení" />
        <img src={zoomouzimg} alt="zmenšení" />
        <img src={detailsimg} alt="detaily (drilování)" />
        <img src={searchimg} alt="hledání/výběr" />
        <hr />
        <Link to="/">
            <i className="fa fa-chevron-left" /> Zpět na vizualizaci
        </Link>
    </div>
);

export default HelpPage;
