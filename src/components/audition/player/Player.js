import React from 'react'
import {View, StyleSheet} from 'react-native'
import AuditionText from './auditionText/AuditionText'
import PlayerControls from './PlayerControls'
import {colors, layout} from '../../../constants/styleVariables'

interface Props {
  pause: () => void,
  repeat: () => void,
  stop: () => void,
  resume: () => void,
  isPlaying: boolean,
  repeatInterval: number,
  textWithMissings: string[],
  currentMissingWordId: number,
  currentMissingWordAnswer: string
}

const Player = ({pause, repeat, stop, isPlaying, resume, repeatInterval, textWithMissings, currentMissingWordId, currentMissingWordAnswer}: Props) => (
  <View style={styles.container}>
    <AuditionText
      textWithMissings={textWithMissings}
      currentMissingWordId={currentMissingWordId}
      currentMissingWordAnswer={currentMissingWordAnswer}
    />
    <PlayerControls
      pause={pause}
      repeat={repeat}
      stop={stop}
      resume={resume}
      isPlaying={isPlaying}
      repeatInterval={repeatInterval}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.first,
    position: 'relative'
  }
})

export default Player
