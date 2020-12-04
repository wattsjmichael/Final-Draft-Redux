import  rootReducer from '../../reducers/index';
import { createStore } from 'Redux';
import kegFormVisibleReducer from '../../reducers/keg-form-visible-reducer';
import draftListReducer from '../../reducers/draft-list-reducer';

let store = createStore(rootReducer)

describe ("rootReducer", ()=> {
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, {type:null})).toEqual({
      fullDraftList: {},
      kegFormVisibleOnPage: false
    });
  });

test ('Check that initial state of draftListReducer mathces root reducer', () => {
 expect(store.getState().fullDraftList).toEqual(draftListReducer(undefined, {type: null}));
});


})