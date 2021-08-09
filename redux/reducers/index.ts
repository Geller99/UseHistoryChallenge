import { combineReducers } from 'redux';
import fields, {State as FieldsState} from './fields'


export type GlobalState = {
    fields: FieldsState
};

export default combineReducers({
  fields
});
