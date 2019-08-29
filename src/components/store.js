import { createStore } from 'redux';

// action types
const LOADING_POST = 'loading_posts';
const LOADING_COM = 'loading_comments';
const DELETE_POST = 'delete_post';
const DELETE_COM = 'delete_comment';

// action creators
export const loadingPosts = value => ({ type: LOADING_POST, value });
export const loadingCom = value => ({ type: LOADING_COM, value });
export const delPost = value => ({ type: DELETE_POST, value });
export const delCom = value => ({ type: DELETE_COM, value });

// selectors
export const getPosps = state => state.posts;
export const getComments = state => state.comments;

// reducer

const posts = (state = [], action) => {
  switch (action.type) {
    case LOADING_POST:
      return action.value;
    case DELETE_POST:
      return state.filter(post => post.id !== action.value);
    default:
      return state;
  }
};

const comments = (state = [], action) => {
  switch (action.type) {
    case LOADING_COM:
      return action.value;
    case DELETE_COM:
      return state.filter(comment => comment.id !== action.value);
    default:
      return state;
  }
};

const reducer = (state = {}, action) => ({
  posts: posts(state.posts, action),
  comments: comments(state.comments, action),
});

const store = createStore(reducer);

export default store;
