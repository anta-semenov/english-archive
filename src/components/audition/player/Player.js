import React from 'react'
import {View, StyleSheet} from 'react-native'
import PlayIcon from './PlayIcon'
import PauseIcon from './PauseIcon'
import RepeatIcon from './RepeatIcon'
import {CancelIcon} from '../../common'
import {colors} from '../../../constants/styleVariables'

const Player = ({pause, repeat, stop, isPlaying, resume, repeatInterval}) => (
  <View style={styles.container}>

    <View style={styles.playerControls}>
      <RepeatIcon onPress={repeat} repeatInterval={repeatInterval}/>
      {isPlaying ?
        <PauseIcon onPress={pause}/> :
        <PlayIcon onPress={resume}/>
      }
      <CancelIcon onPress={stop} style={styles.button}/>
    </View>
  </View>
)

Player.propTypes = {

}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    top: -20,
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.first,
    zIndex: 2
  },
  playerControls: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    height: 56,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.firstLightFade
  },
  button: {
    width: 40,
    height: 40
  }
})

export default Player
