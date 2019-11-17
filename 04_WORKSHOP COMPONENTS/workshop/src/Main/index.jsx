import React from 'react';

import './styles.css';

import Posts from './Posts/postsAPI';

const Main = ({ path }) => {
    return (
        <div className="Main">
            <h1>Publications</h1>
            <Posts path={path} />
        </div>
    )
}

export default Main;