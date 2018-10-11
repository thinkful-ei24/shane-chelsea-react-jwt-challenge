('use strict');

import { SHOW_DIALOG, HIDE_DIALOG, LOGOUT_TIME } from '../actions/activity';

//const initialState
const initialState = {
  dialogue: false,
  time: 0
};

//export default actions
export default (state = initialState, action) => {
  if (action.type === SHOW_DIALOG) {
    Object.assign({}, state, {
      dialogue: true
    });
  } else if (action.type === HIDE_DIALOG) {
    Object.assign({}, state, {
      dialogue: false
    });
  } else if (action.type === LOGOUT_TIME) {
    Object.assign({}, state, {
      time: action.time
    });
  }
  return state;
};
