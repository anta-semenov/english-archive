import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducer'
import {loadUserSongs} from '../actions/audition'

const configureStore = (): Store => {
  const store = createStore(rootReducer, applyMiddleware(thunk))

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducer', () => {
      const nextRootReducer = require('../reducer').default
      store.replaceReducer(nextRootReducer)
    })
  }

  store.dispatch(loadUserSongs())
  return store
}

export default configureStore
