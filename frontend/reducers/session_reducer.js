import { sessionConstants } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});


const SessionReducer = (state = _nullUser, action) =>{
  switch (action.type) {
    case sessionConstants.RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser
      return merge({}, _nullUser, {currentUser})
    case sessionConstants.LOGOUT:
      return merge({}, _nullUser)
    case sessionConstants.SIGNUP:
      const errors = action.errors
      return merge({}, _nullUser, {errors})
    default: return state

  }
};



export default SessionReducer;
