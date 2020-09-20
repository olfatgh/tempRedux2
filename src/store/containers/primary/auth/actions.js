/*
 * Auth Actions
 */

import * as constants from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(username) {
  return {
    type: constants.CHANGE_USERNAME,
    username,
  };
}

export function changePassword(password) {
  return {
    type: constants.CHANGE_PASSWORD,
    password,
  };
}

export function signIn(userId,userToken) {
  console.log("inside signIn ",userId,userToken)
  return {
    type: constants.SIGNIN,
    userId,
    userToken,
  };
}

export function signOut(userId,userToken) {
  return {
    type: constants.SIGN_OUT,
    userId,
    userToken,
  };
}

