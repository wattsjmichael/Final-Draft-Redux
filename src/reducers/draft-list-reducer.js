import * as constants from "./../actions/actionTypes";

export default (state = {}, action) => {
  const { name, brand, price, abv, pintsLeft, id} = action;
  switch (action.type) {
    case constants.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          abv : abv,
          pintsLeft: pintsLeft,
          id: id
        }
      });
      case constants.DELETE_KEG :
        const newState = { ...state };
        delete newState[id];
        return newState;
      default:
        return state;
  }
};