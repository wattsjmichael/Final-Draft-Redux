import * as constants from "./../actions/actionTypes";

export default (state = {}, action) => {
  const { name, brand, price, abv, pintsLeft, id } = action;
  switch (action.type) {
    case constants.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          abv: abv,
          pintsLeft: pintsLeft,
          id: id
        }
      });
    
      case constants.DELETE_KEG:
      const newState = { ...state };
      delete newState[id];
      return newState;
    
      case constants.SELL_PINT:
    
      const sellPint = { ...state };
      console.log(sellPint[id].pintsLeft)
      if (sellPint[id].pintsLeft > 0) {
      sellPint[id].pintsLeft -= 1;
    } else {
      alert("KEG IS EMPTY! Change the Keg and Delete it!");
    }
      return sellPint;
    default:
      return state;
  }
};