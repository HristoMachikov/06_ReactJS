import React from 'react';

import './styles.css';

import Links from '../Links';

function Aside({ path, isLogged }) {
    return (
        <aside className="Aside">
            <ul>
                <Links isLogged={isLogged} />
            </ul>
        </aside>
    )
}

export default Aside;