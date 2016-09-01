import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import BillsMiddleware from './bills_middleware';
import UsersMiddleware from './users_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  BillsMiddleware,
  UsersMiddleware
)


export default RootMiddleware;
