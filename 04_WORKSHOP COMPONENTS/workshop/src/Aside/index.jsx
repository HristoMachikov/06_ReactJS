import React from 'react';

import './styles.css';

import Links from '../Links';

function Aside({ path }) {
    return (
        <aside className="Aside">
            <ul>
                <Links />
            </ul>
        </aside>
    )
}

export default Aside;