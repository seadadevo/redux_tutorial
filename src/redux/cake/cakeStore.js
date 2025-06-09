import { createStore, combineReducers, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import reducer from './cakeReducer';
import { buyCake } from '../../features/TodoSlice';

const rootReducer = combineReducers({
    cake: reducer,
})

export const store = createStore(rootReducer, applyMiddleware(logger));

store.dispatch(buyCake())