import React from 'react';

import './styles.css';

const Link = ({ content }) => {
    return (
        <li className="listItem"
        // onClick={() => onClicked(idx)} 
        >
            <a to="/">{content}</a>
        </li>
    );
}

export default Link;