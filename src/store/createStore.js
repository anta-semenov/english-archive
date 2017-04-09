import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducer'
import {loadUserSongs} from '../actions/audition'

const configureStore = (): Store => {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  store.dispatch(loadUserSongs())
  return store
}

export default configureStore
