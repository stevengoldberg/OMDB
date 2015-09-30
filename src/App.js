import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {  Provider } from 'react-redux';
import { MovieList } from './containers';
import * as reducers from 'reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const logger = createLogger({collapsed: true});
const reducersApp = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, logger)(createStore);
const store = createStoreWithMiddleware(reducersApp);
const history = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
        <Provider store={ store }>
          <Router history={ history }>
            <Route path="/" component={ MovieList }></Route>
          </Router>
        </Provider>
    );
  }
}
