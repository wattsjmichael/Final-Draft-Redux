import * as actions from './../../actions';

describe ('help queue actions', () => {
  it ('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });

  it ('kegFormVisible should create TOGGLE_FORM', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it ('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({name: "Generic Beer", brand: "Beer Co", abv: "5.5", price:"4.25", pintsLeft: 127, id: 1})).toEqual({
      type: "ADD_KEG",
      name: "Generic Beer", 
      brand: "Beer Co", 
      abv: "5.5", 
      price:"4.25", 
      pintsLeft: 127, 
      id: 1
    });
  });

});