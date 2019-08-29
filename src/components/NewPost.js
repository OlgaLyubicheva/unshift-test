import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { addPosts, updatePost, loadPostWhithComments } from './loadingData';
import { loadingCom, getComments } from './store';

const NewPost = ({ history, upd, currentPost, updPost }) => {
  const [post, setPost] = useState({ title: currentPost.title, body: currentPost.body });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!upd) {
      addPosts(post);
      setPost({ title: '', body: '' });
    } else {
      updatePost(currentPost.id, post);
      loadPostWhithComments(currentPost.id).then(data => updPost(data));
      history.push(`/posts/${currentPost.id}?_embed=comments`);
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <input
          type="text"
          placeholder="Enter title of post"
          name="title"
          value={post.title}
          onChange={event => handleChange(event)}
        />
      </div>
      <div>
        <textarea
          placeholder="Write a post"
          name="body"
          value={post.body}
          onChange={event => handleChange(event)}
        />
      </div>

      {
        !upd
        ? <button type="submit">Create post</button>
        : <button type="submit">Update post</button>
      }
      
    </form>
  );
};

const getData = state => ({
  currentPost: getComments(state),
});

const getMethods = dispatch => ({
  updPost: value => dispatch(loadingCom(value)),
});

export default connect(getData, getMethods)(withRouter(NewPost));
