import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './types/counterActionTypes';

export const incrementCounter = () => (dispatch) => {
  return dispatch({
    type: INCREMENT_COUNTER
  });
};

export const decrementCounter = () => (dispatch) => {
  return dispatch({
    type: DECREMENT_COUNTER
  });
};