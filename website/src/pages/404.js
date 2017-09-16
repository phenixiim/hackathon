import React from 'react';
import Link from 'gatsby-link';

const NotFoundPage = () => (
    <div
        style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: '1rem'
        }}
    >
        <h2>Chyba 404 - STRÁNKA NENALEZENA</h2>
        <p>
          Odkaz, na který jste klikli, může být zrušený nebo byla stránka již odstraněna.
        </p>
        <hr />
        <Link to="/">
            <i className="fa fa-chevron-left" /> Zpět na vizualizaci
        </Link>
    </div>
);

export default NotFoundPage;
