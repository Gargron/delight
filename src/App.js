import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { offline } from 'redux-offline';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import axios from 'axios';
import appReducer from './reducers';
import offlineConfig from 'redux-offline/lib/defaults';
import UI from './UI';

const store = createStore(
  appReducer,
  compose(
    applyMiddleware(thunk),
    offline({ ...offlineConfig, effect: effect => axios(effect) })
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <UI />
      </Provider>
    );
  }
}

export default App;
