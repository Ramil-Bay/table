import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducers';
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk));