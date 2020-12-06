import * as constants from './../actions/actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case constants.TOGGLE_FORM:
      return !state;
    default:
      return state;
  }
}