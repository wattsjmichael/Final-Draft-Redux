import * as constants from './../actions/actionTypes'

export default (state = false, action) => {
  switch (action.type) {
  case constants.EDIT_KEG:
    return !state;
  default:
    return state;
  }
};