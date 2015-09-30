import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {  Provider } from 'react-redux';
import Main from './Main';
import * as reducers from 'reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Items, SimpleComponent } from './containers/';

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
            <Route path="/" component={ Main }>
              <Route path="simple" component={ SimpleComponent } />
              <Route path="items" component={ Items } />
            </Route>
          </Router>
        </Provider>
    );
  }
}
