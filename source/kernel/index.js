// @flow

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

const reducers = {};
const routes = [];
const middleware = [];
const initial = typeof window !== 'undefined' && '__INITIAL__' in window ? window.__INITIAL__ : {};
const composeEnhancers = typeof window !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

/*
Kernel management
 */
/**
 * @param {string} name - name of module
 * @param {func} reducer - provided reducer
 * @returns {undefined}
 */
const registerReducerInKernel = (name: String, reducer: Function) => reducers[name] = reducer;

/**
 * @param {array} route - array of objects
 * @returns {undefined}
 */
const registerRoutesInKernel = (route: Array) => routes.push(...route);

/**
 * @param {object} module - module object
 * @returns {undefined}
 */
const registerModule = (module: { name: String, reducer: ?Function, routes: ?Array }) => {
  const name = module.name;
  const reducer = 'reducer' in module && module.reducer;
  const routes = 'routes' in module && module.routes;

  if (reducer) registerReducerInKernel(name, reducer);
  if (routes) registerRoutesInKernel(routes);
};

/*
Please import and register modules here
 */
import ModuleA from '../modules/module-a';
import ModuleB from '../modules/module-b';

registerModule(ModuleA);
registerModule(ModuleB);

/*
Store part
 */
const store = createStore(combineReducers(reducers), initial, composeEnhancers(applyMiddleware(...middleware)));

export default { store, routes };
