import {connect} from 'react-redux'
import {StatusBar} from 'react-native'
import SongList from './SongList'
import {SongListHeader, FilterInput} from './SongListHeader'
import * as fromReducer from '../../../reducer'
import {startAudition, filterSongs} from '../../../actions/audition'
import {audition} from '../../../constants/routes'

const mapStateToProps = state => ({
  data: fromReducer.getUserSongs(state),
  filter: fromReducer.getAuditionFilter(state)
})

const mapDispatchToProps = (dispatch, {navigation}) => ({
  onPress: song => {
    dispatch(startAudition(song))
    navigation.navigate(audition.player)
    StatusBar.setHidden(true)
  },
  filterOnChange: text => dispatch(filterSongs(text))
})

const connected = connect(mapStateToProps, mapDispatchToProps)(SongList)
const connectedHeader = connect(mapStateToProps, mapDispatchToProps)(FilterInput)

connected.navigationOptions = SongListHeader(connectedHeader)

export default connected
