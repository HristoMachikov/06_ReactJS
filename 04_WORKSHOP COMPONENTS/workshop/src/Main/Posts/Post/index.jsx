import React from 'react';

import './styles.css';

const Post = ({ children, key, path, author }) => {
    return (
        <div className="Post" data-id={key}>
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