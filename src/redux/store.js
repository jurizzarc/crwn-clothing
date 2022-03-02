import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'; // allows the browser to cache the store depending on certain configurations
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

// set up middlewares
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);