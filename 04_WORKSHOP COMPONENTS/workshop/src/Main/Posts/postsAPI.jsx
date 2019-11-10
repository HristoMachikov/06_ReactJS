import React from 'react';

import Post from './Post';

// import posts from '../../data/posts.json';

import postService from '../../services/post-service'

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null
        };
    }
    componentDidMount() {
        postService.load().then(posts => {
            console.log(posts);
            this.setState({ posts });
        })
    }

    render() {
        const { posts } = this.state;
        return posts ? <div className="Posts">
            {posts.map((post) => {
                return <Post key={post.id} author={post.userId} path={this.props.path}>{post.body}</Post>;
                // return <Post key={post._id} author={post.author} path={path}>{post.description}</Post>;
            })}
        </div> : <div>Loading...</div>
    }
}

export default Posts;