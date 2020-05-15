import { TOGGLE_IS_INCREMENTING } from './types/notifyActionTypes';

export const notify = () => (dispatch) => {
  return dispatch({
    type: TOGGLE_IS_INCREMENTING
  });
};