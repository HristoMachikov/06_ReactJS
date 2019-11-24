import React from 'react';

import './styles.css';

import Links from '../Links';

const Footer = ({ path, isLogged }) => {
    return (
        <footer className="Footer">
            <ul>
                <Links isLogged={isLogged} />
                <img src={path} alt="logo" width="70px" />
            </ul>
            <p>Software university 2019</p>
        </footer>
    )
}

export default Footer;