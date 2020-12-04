import kegFormVisibleReducer from '../../reducers/keg-form-visible-reducer';

describe ("kegFormVisibleReducer", ()=> {
  test ('Should return default state if no action type is recognized', ()=> {
    expect(kegFormVisibleReducer(false, { type: null})).toEqual(false);
    
  })
})