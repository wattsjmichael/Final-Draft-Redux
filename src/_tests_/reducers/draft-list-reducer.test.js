import draftListReducer from '../../reducers/draft-list-reducer';

describe ('draftListReducer', () => {


  const currentState = {
    1: {
    name: "Boneyard IPA",
    brand: "Boneyard Brewery",
    price : "5.50",
    abv: "6.7",
    pintsLeft: 127,
    id: 1
    },
    2: {
      name: "The Abyss",
      brand: "Deschutes Brewery",
      price: "12.50",
      abv: "12.5",
      pintsLeft: 44,
      id: 2
    },
  }

  let action;
  const kegInfo = {
    name: 'Best Day Ever IPA',
    brand: 'Brothers Cascadia Brewing',
    price: '5.50',
    abv: '6.1',
    pintsLeft: 127,
    id: 1
  };





  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(draftListReducer({}, {type: null})).toEqual({});
  });

  test("Should add new kegInfo to fullDraftList", () => {
    const { name, brand, price, abv, pintsLeft, id} = kegInfo;
    action = {
      type : 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      abv: abv,
      pintsLeft: pintsLeft,
      id: id
    };

    expect(draftListReducer({}, action)).toEqual({
      [id] : {
      name: name,
      brand: brand,
      price: price,
      abv: abv,
      pintsLeft: pintsLeft,
      id: id
      }
    });
  });

    test ("should sucessfully delete a keg", () => {
      action = {
        type: 'DELETE_KEG',
        id: 1
      };
      expect(draftListReducer(currentState, action)).toEqual({
        2: {name: "The Abyss",
        brand: "Deschutes Brewery",
        price: "12.50",
        abv: "12.5",
        pintsLeft: 44,
        id: 2}
      });
    });

  });
