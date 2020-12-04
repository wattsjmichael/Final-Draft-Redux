import rootReducer from '../../reducers/index';
import { createStore } from 'Redux';
import kegFormVisibleReducer from '../../reducers/keg-form-visible-reducer';
import draftListReducer from '../../reducers/draft-list-reducer';

let store = createStore(rootReducer)

describe("rootReducer", () => {
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      fullDraftList: {},
      kegFormVisibleOnPage: false
    });
  });

  test('Check that initial state of draftListReducer matches root reducer', () => {
    expect(store.getState().fullDraftList).toEqual(draftListReducer(undefined, { type: null }));
  });

  test('Check that initial state of kegFormVisibleReducer matches root reducer', () => {
    expect(store.getState().kegFormVisibleOnPage).toEqual(kegFormVisibleReducer(undefined, { type: null }));
  });

  test("Checks that ADD_KEG action works for draftListReducer and rootReducer", () => {
    const action = {
      type: 'ADD_KEG',
      name: 'Heinieken',
      brand: 'Heinieken',
      price: '2.50',
      abv: '3.5',
      pintsLeft: 127,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().fullDraftList).toEqual(draftListReducer(undefined, action));
  });


})