import React from 'react';

import Post from './Post';

import posts from '../../data/posts.json';

const Posts = ({ path }) => {
    return <div className="Posts">
        {posts.map((post, idx) => {
            return <Post key={idx} author={post.author} path={path}>{post.description}</Post>;
        })}
    </div>
}

export default Posts;