import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './comp/Home';
import thunk from 'redux-thunk';
import {
  Provider
} from 'react-redux';
import {
  createStore,
  applyMiddleware
} from 'redux';
import allReducers from './reducers/index.js';

const store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('app')
);