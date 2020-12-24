/* eslint-disable */
import { connectActionContainer } from 'airswap.js/src/utils/redux';
import _ from 'lodash';

import * as ethPrice from './ethPrice';

const state = { ethPrice };

const middleware = _.filter(_.map(_.values(state), 'middleware'));
const rootReducerObj = _.pickBy(_.mapValues(state, 'reducers'), _.identity);
const defaultState = _.pickBy(_.mapValues(state, 'defaultState'), _.identity);

const configureStateContainers = connect =>
  _.mapValues(_.merge({}, ..._.compact(_.map(_.values(state), 'containers'))), containerSelector =>
    containerSelector(connect),
  );

const configureActionContainers = connect =>
  _.mapValues(_.merge({}, ..._.compact(_.map(_.values(state), 'actions'))), (action, name) =>
    connectActionContainer(action, name)(connect),
  );

export { defaultState, middleware, rootReducerObj, configureStateContainers, configureActionContainers };
