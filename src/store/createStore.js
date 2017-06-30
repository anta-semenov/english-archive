import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../reducer'
import {loadUserSongs, loadState} from '../actions'
import throttle from 'lodash/throttle'
import {STATE} from '../constants/storageKeys'
import {localStorage} from '../services/localStorage'

const configureStore = (): Store => {
  const store = createStore(rootReducer, applyMiddleware(thunk, logger))

  store.subscribe(throttle(() => {
    const state = store.getState()
    localStorage.setItem(STATE, state)
  }, 5000))

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducer', () => {
      const nextRootReducer = require('../reducer').default
      store.replaceReducer(nextRootReducer)
    })
  }

  store.dispatch(loadState())
  store.dispatch(loadUserSongs())
  return store
}

export default configureStore
