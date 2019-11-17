import React from 'react';

import {Link} from 'react-router-dom';

import './styles.css';

import Links from '../Links';

function Navigation({ path }) {
    return (
        <nav className="Navigation">
            <ul>
                <Link to="/"><img src={path} alt="logo" width="70px" /></Link>
                <Links />
            </ul>
        </nav>
    )
}

export default Navigation;