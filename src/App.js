import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PostList from './components/PostList';
import PostPage from './components/PostPage';
import NewPost from './components/NewPost';

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                exact
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/posts">
                Posts
              </NavLink>
            </li>

            <li>
              <NavLink to="/newpost">
                New post
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/posts/:postId" component={PostPage} />
        <Route path="/posts" component={PostList} />
        <Route path="/newpost" component={NewPost} />
      </Switch>
    </div>
  );
};

export default App;
