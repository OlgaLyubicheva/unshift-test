import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Post = ({ post, history }) => (
  <div>
    <Link to={`posts/${post.id}?_embed=comments`}>
      <h2>{post.title}</h2>
    </Link>
    <p>{post.body}</p>
    
    <button 
      type="button"
      onClick={() => history.push(`posts/${post.id}?_embed=comments#update`)}
    >
      Change
    </button>
    <button
      type="button"
      onClick={() => history.push(`posts/${post.id}?_embed=comments`)}
    >
      Delete
    </button>
  </div>
);

export default withRouter(Post);
