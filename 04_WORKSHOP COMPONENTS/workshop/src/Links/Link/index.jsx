import React from 'react';

import './styles.css';

const Link = ({ content, key }) => {
    return (
        <li className="listItem" data-id={key}
        // onClick={() => onClicked(idx)} 
        >
            <a href="#">{content}</a>
        </li>
    );
}

export default Link;