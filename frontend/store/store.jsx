import { createStore } from 'redux';
import  RootReducer  from '../reducers/root_reducer';
import RootMiddleware from '../middlewares/root_middleware';


const preloadedState = {
  session: {
    currentUser: null,
    errors: []
  }
}
// ,
// bills: {
//   bills:[],
//   bill:{},
//   errors:[]
// }

const configureStore = (initialState=preloadedState) => (
  createStore(
    RootReducer,
    initialState,
    RootMiddleware
  )
)

export default configureStore;
