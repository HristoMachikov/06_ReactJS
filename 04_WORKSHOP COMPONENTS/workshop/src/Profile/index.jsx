import React from 'react';

import './styles.css';

import Posts from '../Main/Posts/postsAPI';

const Profile = ({ path }) => {
    return (
        <div className="Profile">
            <img src="/static/img/pinko.png" alt="profile-icon" />
            <div className="personal-info">
                <p>
                    <span>Email:</span>
                    pesho@abv.pp
            </p>
                <p>
                    <span>Posts:</span>9
            </p>
            </div>
            <div>
                <h2>Last 3 posts</h2>
                <Posts path={path} limit={2} />
            </div>
        </div>
    )
}

export default Profile;