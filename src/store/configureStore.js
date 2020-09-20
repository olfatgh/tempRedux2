import { createStore, applyMiddleware } from 'redux'
import primaryReducer from './primaryReducer'
import thunk from 'redux-thunk'

export default function configureStore() {
  let store = createStore(primaryReducer, applyMiddleware(thunk))
  return store
}