import React from 'react'
import {View, StyleSheet} from 'react-native'
import PlayIcon from './PlayIcon'
import PauseIcon from './PauseIcon'
import RepeatIcon from './RepeatIcon'
import {CancelIcon} from '../../common'
import {colors, layout} from '../../../constants/styleVariables'

interface Props {
  pause: () => void,
  repeat: () => void,
  stop: () => void,
  resume: () => void,
  isPlaying: boolean,
  repeatInterval: number
}

class PlayerControls extends React.PureComponent<{}, Props, {}> {
  render() {
    const {pause, repeat, stop, isPlaying, resume, repeatInterval} = this.props
    return(
      <View style={styles.playerControls}>
        <RepeatIcon onPress={repeat} repeatInterval={repeatInterval}/>
        {isPlaying ?
          <PauseIcon onPress={pause}/> :
          <PlayIcon onPress={resume}/>
        }
        <CancelIcon onPress={stop} style={styles.button}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  playerControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    height: layout.playerControlsHeight,
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

export default PlayerControls
