import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import coreMiddlware from 'redux/middleware/core';
import featureMiddlware from 'redux/middleware/feature';

const rootReducer = combineReducers({});

const enhacer = compose(applyMiddleware(...featureMiddlware, ...coreMiddlware), DevTools.instrument());

export const store = createStore(rootReducer, enhacer);
