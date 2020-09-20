/*
 * Language Reducer
 *
 */

import * as constants from './constants';

// The initial state of the App
export const initialState = {
  language: 'en',
};

export default  languageReducer = (state = initialState, action) => {
    switch (action.type) {
      case constants.CHANGE_LANGUAGE:
        return state.set('language', action.language);
      default:
        return state;
    }
  }

