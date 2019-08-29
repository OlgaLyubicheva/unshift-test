import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadPostWhithComments, delPost } from './loadingData';
import { loadingCom, getComments } from './store';
import NewPost from './NewPost';


const PostPage = ({ match, location, history, saveCom, postWhithComm }) => {
  useEffect(() => {
    loadPostWhithComments(match.params.postId).then(data => saveCom(data));
  }
  );

  return (
    <div>
      <h1>{postWhithComm.title}</h1>
      <p>{postWhithComm.body}</p>

      <div>
        <h2>Comments</h2>
        {
          postWhithComm.length !== 0
            ? postWhithComm.comments.map(comment => (
              <div>{comment.body}</div>
            ))
            : ''
        }
      </div>

      {
        location.hash === '#update' && (
        postWhithComm.length !== 0) && (
        <div id="update">
          <NewPost upd />
        </div>)
      }

    {
      location.hash !== '#update' && (
      <button 
        type="button"
        onClick={() => history.push(`/posts/${postWhithComm.id}?_embed=comments#update`)}
      >
        Change
      </button>)
    }
    <button
      type="button"
      onClick={() => { delPost(postWhithComm.id); history.push('/posts') }}
    >
      Delete
    </button>
    </div>
  );
};

const getData = state => ({
  postWhithComm: getComments(state),
});

const getMethods = dispatch => ({
  saveCom: value => dispatch(loadingCom(value)),
});

export default connect(getData, getMethods)(PostPage);
