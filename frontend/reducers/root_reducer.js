import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import billsReducer from './bills_reducer';



const RootReducer = combineReducers({
  session: SessionReducer,
})
// bills: billsReducer

export default RootReducer;
