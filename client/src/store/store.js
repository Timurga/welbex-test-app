import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    user: loginReducer,
});

export const store = configureStore({reducer: rootReducer}, composeWithDevTools(applyMiddleware(thunk)))