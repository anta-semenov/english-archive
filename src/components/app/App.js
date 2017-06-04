import React from 'react'
import {StatusBar} from 'react-native'
import Audition from '../audition'

const App = () => {
  StatusBar.setBarStyle('light-content')
  return (
    <Audition/>
  )
}

export default App
