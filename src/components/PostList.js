import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadPosts } from './loadingData';
import { loadingPosts, getPosps } from './store';

import Post from './Post';

const PostList = ({ posts, savePosts }) => {
  useEffect(() => {
    loadPosts().then(data => savePosts(data));
  });

  return (
    <div>
      {
        posts.map(post => (
          <Post post={post} key={post.id} />
        ))
      }
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
  savePosts: PropTypes.func.isRequired,
};

const getData = state => ({
  posts: getPosps(state),
});

const getMethods = dispatch => ({
  savePosts: value => dispatch(loadingPosts(value)),
});

export default connect(getData, getMethods)(PostList);
