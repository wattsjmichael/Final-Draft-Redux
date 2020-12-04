import draftListReducer from '../../reducers/draft-list-reducer';

describe ('draftListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(draftListReducer({}, {type: null})).toEqual({});
  });
});