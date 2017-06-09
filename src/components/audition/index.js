import {StackNavigator} from 'react-navigation'
import AuditionSongList from './songList/songListConnect'
import {audition} from '../../constants/routes'

const Audition = StackNavigator({
  [audition.songList]: {screen: AuditionSongList}
})

export default Audition
