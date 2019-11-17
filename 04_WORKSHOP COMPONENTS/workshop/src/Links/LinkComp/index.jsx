import React, { Fragment } from 'react';

import { Link } from "react-router-dom"

import './styles.css';

const LinkComp = ({ content }) => {
    return (
        <Fragment>
            <li className="listItem">
                <Link to="/post">Post</Link>
            </li>
            <li className="listItem">
                <Link to="/register">Register</Link>
            </li>
            <li className="listItem">
                <Link to="/login">Login</Link>
            </li>
            <li className="listItem">
                <Link to="/profile">Profile</Link>
            </li>
        </Fragment>
    );
}

export default LinkComp;