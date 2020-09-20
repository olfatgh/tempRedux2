import { combineReducers } from 'redux'
import authReducer from './containers/primary/auth/reducer'
import languageReducer from './containers/primary/language/reducer'

export default primaryReducer = combineReducers({
  authReducer,
  languageReducer,
})