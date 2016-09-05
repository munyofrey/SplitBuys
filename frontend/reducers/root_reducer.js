import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import billsReducer from './bills_reducer';
import userReducer from './user_reducer';
import SumsReducer from './sums_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  bills: billsReducer,
  users: userReducer,
  sums: SumsReducer
})

export default RootReducer;
