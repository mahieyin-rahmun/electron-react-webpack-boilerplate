import { TOGGLE_IS_INCREMENTING } from '../actions/types/notifyActionTypes';

const initialState = {
  isIncrementing: false
};

export const notifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_INCREMENTING:
      return {
        ...state,
        isIncrementing: !state.isIncrementing
      }

    default:
      return state;
  }
};