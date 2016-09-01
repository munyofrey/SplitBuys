import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import billsReducer from './bills_reducer';
import userReducer from './user_reducer'


const RootReducer = combineReducers({
  session: SessionReducer,
  bills: billsReducer,
  users: userReducer
})

export default RootReducer;
