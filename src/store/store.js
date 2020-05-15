import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { counterReducer } from './reducers/counterReducer';
import { notifyReducer } from '../store/reducers/notifyReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  notify: notifyReducer
});

const middleware = [thunk];

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);

export default store;