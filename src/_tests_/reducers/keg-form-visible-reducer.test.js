import kegFormVisibleReducer from '../../reducers/keg-form-visible-reducer';


describe ("kegFormVisibleReducer", ()=> {
  
  test ('Should return default state if no action type is recognized', ()=> {
    expect(kegFormVisibleReducer(false, { type: null})).toEqual(false);
    
  });

  test ('Should toggle form visiblity to true', () => {
    expect(kegFormVisibleReducer(false, { type: 'TOGGLE_FORM'})).toEqual(true);
  });

})