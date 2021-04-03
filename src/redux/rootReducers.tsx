import { combineReducers } from 'redux';
import tableReducer from './table/tableReducer';

const rootReducer = combineReducers({
  tableReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>