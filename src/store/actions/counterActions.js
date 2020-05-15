import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './types/counterActionTypes';
import { notify } from '../actions/notifyActions'

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

export const incrementIfOdd = () => (dispatch, getState) => {
  const { count } = getState().counter;

  if (count % 2 === 0) {
    return;
  }

  return dispatch({
    type: INCREMENT_COUNTER
  });
};

export const incrementIfEven = () => (dispatch, getState) => {
  const { count } = getState().counter;

  if (count % 2 !== 0) {
    return;
  }

  return dispatch({
    type: INCREMENT_COUNTER
  });
};

export const incrementAsync = () => (dispatch) => {
  dispatch(notify());

  setTimeout(
    () => {
      dispatch({
        type: INCREMENT_COUNTER
      });

      return dispatch(notify());
    },
    (1000 + Math.random() * 5000 - 1000)  // delay of 1-5 seconds
  );
};