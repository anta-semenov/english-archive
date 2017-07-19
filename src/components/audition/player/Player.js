import React from 'react'
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native'
import AuditionText from './auditionText/AuditionText'
import PlayerControls from './PlayerControls'
import {colors, fonts, layout} from '../../../constants/styleVariables'
import type {AuditionTextStatus} from '../../../types'

interface Props {
  pause: () => void,
  repeat: () => void,
  stop: () => void,
  resume: () => void,
  isPlaying: boolean,
  repeatInterval: number,
  textWithMissings: string[],
  currentMissingWordId: number,
  currentMissingWordAnswer: string,
  textStatus: AuditionTextStatus,
  textMessage: string
}

const Player = ({pause, repeat, stop, isPlaying, resume, repeatInterval, textWithMissings,
  currentMissingWordId, currentMissingWordAnswer, textStatus, textMessage}: Props) => (
  <View style={styles.container}>
    {
      textStatus === 'ready' ?
      <AuditionText
        textWithMissings={textWithMissings}
        currentMissingWordId={currentMissingWordId}
        currentMissingWordAnswer={currentMissingWordAnswer}
      /> :
      <View style={styles.auditionTextMessageContainer}>
        {
          textStatus === 'request' &&
          <ActivityIndicator animating color={colors.secondFade}/>
        }
        <Text style={styles.auditionTextMessage}>{textMessage}</Text>
      </View>
    }
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
  },
  auditionTextMessageContainer: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 56,
    justifyContent: 'center',
    alignItems: 'center'
  },
  auditionTextMessage: {
    color: colors.secondFade,
    fontSize: fonts.listItemTitleSize,
    textAlign: 'center',
    margin: layout.spacer * 2
  }
})

export default Player
