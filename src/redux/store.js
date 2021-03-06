import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'; // allows the browser to cache the store depending on certain configurations
import logger from 'redux-logger';
import createSageMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSageMiddleware();

// set up middlewares
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);