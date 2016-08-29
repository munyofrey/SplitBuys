import { createStore } from 'redux';
import  RootReducer  from '../reducers/root_reducer';
import RootMiddleware from '../middlewares/root_middleware';


const preloadedState = {session: {
  currentUser: null,
  errors: []
}}

const configureStore = () => (
  createStore(
    RootReducer,
    preloadedState,
    RootMiddleware
  )
)

export default configureStore;
