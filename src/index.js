import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';

import reducers from './state';

import './index.css';

const store = createStore(reducers, applyMiddleware(thunk));

// When state changes, re-render
store.subscribe(() => {
  ReactDOM.render (
    <App
      currentState={store.getState()}
      updateState={store.dispatch}
    />,
    document.getElementById('root')
  );
});

// Initial rendering
ReactDOM.render (
  <App
    currentState={store.getState()}
    updateState={store.dispatch}
  />,
  document.getElementById('root')
);
