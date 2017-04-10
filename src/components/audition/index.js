import React from 'react'
import {StackNavigator} from 'react-navigation'
import AuditionSongList from './songList/songListConnect'
import AuditionPLayer from './player/playerConnect'
import {audition} from '../../constants/routes'

const Audition = StackNavigator({
  [audition.songList]: {screen: AuditionSongList},
  [audition.player]: {screen: AuditionSongList}
})

export default Audition
