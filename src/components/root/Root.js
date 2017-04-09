import React from 'react'
import {Provider} from 'react-redux'
import configureStore from '../../store/createStore'
import App from '../app/App.js'

const Root = () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
)

export default Root
