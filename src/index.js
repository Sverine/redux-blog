import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { getPosts } from './redux/post/post.action';

import { store } from './redux/store';
import { getUsers } from './redux/user/user.action';
import "./styles/index.scss";

store.dispatch(getPosts());
store.dispatch(getUsers());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);