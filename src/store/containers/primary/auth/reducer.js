/*
 * Auth Reducer
 *
 */

import * as constants from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  password: '',
  userId:null,
  userToken:null,
};

export default  authReducer = (state = initialState, action) => {
    console.log("..... action is",action.type);
    switch (action.type) {
      case constants.CHANGE_USERNAME:
        return state.set('username', action.username);
      case constants.CHANGE_PASSWORD:
        return state.set('password', action.password);

      case constants.SIGNIN:
        return state.set({userId: action.userId,userToken:action.userToken});
      case constants.SIGN_OUT:
        return state.set({userId: null,userToken:null});
        break;
      default:
        return state;
    }
  }

