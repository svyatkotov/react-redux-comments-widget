import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './containers/Widget/Widget';
import { createStore } from 'redux';
import commentsWidget from './reducers/reducers';

const persistedState = localStorage.commentsWidget ? JSON.parse(localStorage.commentsWidget) : [];

const store = createStore(commentsWidget, persistedState);

store.subscribe(() => {
  localStorage.commentsWidget = JSON.stringify(store.getState());
});

ReactDOM.render(<Widget store={store}/>, document.querySelector('body'));