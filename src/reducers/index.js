import kegFormVisibleReducer from './keg-form-visible-reducer';
import draftListReducer from './draft-list-reducer';
import { combineReducers } from 'redux';
import editingReducer from "./editing-reducer";
import selectedKegReducer from './selected-keg-reducer';

const rootReducer = combineReducers({
  kegFormVisibleOnPage : kegFormVisibleReducer,
  fullDraftList : draftListReducer,
  editing: editingReducer,
  selectedKeg : selectedKegReducer
});

export default rootReducer;