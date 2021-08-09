import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redux/reducers'

export const store = createStore(
  rootReducer
);

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
