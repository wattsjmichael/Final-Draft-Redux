import selectedKeg from "../../reducers/selected-keg-reducer";



describe("selectedKegReducer", () => {

  const fullDraftList = {
    1: {
      name: "BCB",
      brand: "BCB",
      price: "4.25",
      abv: "2.3",
      pintsLeft: 123,
      id: "1",
    },
    2: {
      name: "the abyss",
      brand: "deschutes",
      price: "10.00",
      abv: "12.5",
      pintsLeft: 43,
      id: "2"
    },
  };

  test('Should return default state if no action type is recognized', () => {
    expect(selectedKeg(undefined, { type: null })).toEqual(null);
  });

  test("selects keg by Id", () => {
    const action = {
      type: "SELECT_KEG",
      selectedKeg: fullDraftList[2]
    }
    
    expect(selectedKeg(fullDraftList, action)).toEqual({
    
      name: "the abyss",
      brand: "deschutes",
      price: "10.00",
      abv: "12.5",
      pintsLeft: 43,
      id: "2"
  })
  })

});