import { SessionConstants } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  forms:{
    login: { errors: []}
    signup: { errors: []}
   }
});
