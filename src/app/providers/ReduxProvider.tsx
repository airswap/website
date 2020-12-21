import configureStore from 'airswap.js/src/redux/configureStore';
import React from 'react';
import { connect, Provider } from 'react-redux';

import {
  defaultState,
  middleware,
  rootReducerObj,
} from '../../state';

const persistedState = [];
const store = configureStore(middleware, rootReducerObj, defaultState, persistedState);

const Redux = Component => props => (
  <Provider store={store}>
    <Component {...props} />
  </Provider>
);

export { store };

export default Redux;
