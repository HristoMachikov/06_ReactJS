import React from 'react';

import './styles.css';

import Posts from '../Main/Posts/postsAPI';

const Profile = ({ path }) => {
    return (
        <div className="Input">
            <h1>Share your thoughts...</h1>
            <textarea  id="" cols="30" rows="10"></textarea>
            <button>Post</button>
            <div>
                <h2>Last 3 posts</h2>
                <Posts path={path} limit={2} />
            </div>
        </div>
    )
}

export default Profile;