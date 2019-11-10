import React from 'react';

import './styles.css';

import Links from '../Links';

function Navigation({ path }) {
    return (
        <nav className="Navigation">
            <ul>
                <img src={path} alt="logo" width="70px" />
                <Links />
            </ul>
        </nav>
    )
}

export default Navigation;