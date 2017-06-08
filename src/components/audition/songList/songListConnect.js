import {connect} from 'react-redux'
import {StatusBar} from 'react-native'
import SongList from './SongList'
import {SongListHeader, FilterInput, CancelButton, HeaderTitle} from './SongListHeader'
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
  filterOnChange: text => dispatch(filterSongs(text)),
  filterOnCancel: () => dispatch(filterSongs())
})

const connected = connect(mapStateToProps, mapDispatchToProps)(SongList)
const connectedHeaderTitle = connect(mapStateToProps, mapDispatchToProps)(HeaderTitle)
const connectedCancelButton = connect(mapStateToProps, mapDispatchToProps)(CancelButton)

connected.navigationOptions = SongListHeader(connectedHeaderTitle, connectedCancelButton)

export default connected
