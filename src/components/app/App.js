import React from 'react'
import {StatusBar, View, StyleSheet} from 'react-native'
import Audition from '../audition'
import {colors} from '../../constants/styleVariables'

const App = () => {
  StatusBar.setBarStyle('light-content')
  return (
    <View style={styles.container}>
      <Audition/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.first
  }
})

export default App
