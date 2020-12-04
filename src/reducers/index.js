import kegFormVisibleReducer from './keg-form-visible-reducer';
import draftListReducer from './draft-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  kegFormVisibleOnPage : kegFormVisibleReducer,
  fullDraftList : draftListReducer
});

export default rootReducer;