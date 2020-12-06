import * as constants from './../actions/actionTypes'

export default (state = false, action) => {
  switch (action.type) {
  case constants.EDITING:
    return !state;
  default:
    return state;
  }
};