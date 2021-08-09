
import { useSelector } from 'react-redux';
import { GlobalState } from './reducers'
import { Field } from './reducers/fields'


/* istanbul ignore next */
export const useFields = (): Field[] => {
  const fields: Field[] = useSelector(
      (state: GlobalState) => state.fields
  );
  return fields;
};