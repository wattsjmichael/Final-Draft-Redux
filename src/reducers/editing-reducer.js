import * as constants from './../actions/actionTypes'

export default (state = false, action) => {
  switch (action.type) {
    case constants.EDIT_KEG:
      const newState = true;
      return newState;
    case constants.NOT_EDIT_KEG:
      const newStateNotEditKeg = false;
      return newStateNotEditKeg;
    default:
      return state;
  }
};