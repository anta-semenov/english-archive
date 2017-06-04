import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import PlayIcon from './PlayIcon'
import PauseIcon from './PauseIcon'
import {colors, fonts} from '../../../constants/styleVariables'

const Player = ({pause, repeat, stop, isPlaying, resume}) => (
  <View style={styles.container}>
    {isPlaying ?
      <PauseIcon onPress={pause}/> :
      <PlayIcon onPress={resume}/>
    }
    <Text style={styles.button} onPress={repeat}>Repeat</Text>
    <Text style={styles.button} onPress={stop}>Back</Text>
  </View>
)

Player.propTypes = {

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.first
  },
  button: {
    color: colors.second,
    borderColor: colors.third,
    borderWidth: 3,
    borderRadius: 5,
    marginVertical: 8,
    padding: 8,
    fontSize: fonts.buttonSize,
    fontWeight: 'bold'
  }
})

export default Player
