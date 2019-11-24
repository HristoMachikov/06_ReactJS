import React, { Fragment } from 'react';

import { Link } from "react-router-dom"

import './styles.css';

const LinkComp = (props) => {
    const { isLogged } = props
    return (
        <Fragment>
            <li className="listItem">
                <Link to="/post">Post</Link>
            </li>
            {isLogged && <li className="listItem">
                <Link to="/profile">Profile</Link>
            </li>}
            {!isLogged && <li className="listItem">
                <Link to="/user/register">Register</Link>
            </li>}
            {!isLogged && <li className="listItem">
                <Link to="/user/login">Login</Link>
            </li>}
            {isLogged && <li className="listItem">
                <Link to="/user/logout">Logout</Link>
            </li>}
        </Fragment>
    );
}

export default LinkComp;