import React from 'react';

import './styles.css';

const Post = ({ children, path, author }) => {
    return (
        <div className="Post">
            <img src={path} alt="logo"/>
            <p className="description">{children}</p>
            <div>
                <span>
                    <small>Author: </small>
                    {author}
                </span>
            </div>
        </div>
    );
}

export default Post;