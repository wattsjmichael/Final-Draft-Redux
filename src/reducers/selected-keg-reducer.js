import * as constants from './../actions/actionTypes'

export default (state = null, action ) => {
  const {selectedKeg} = action;
  switch (action.type) {
    case constants.SELECT_KEG :
      const newState = selectedKeg;
      return newState;
    default:
      return state;
  }
  };
