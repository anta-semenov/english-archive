import {connect} from 'react-redux'
import SongList from './SongList'
import {SongListHeader, Header, CancelButton} from './header'
import * as fromReducer from '../../../reducer'
import {startAudition, filterSongs} from '../../../actions/audition'

const mapStateToProps = state => ({
  data: fromReducer.getUserSongs(state),
  filter: fromReducer.getAuditionFilter(state)
})

const mapDispatchToProps = (dispatch) => ({
  startAudition: song => {
    dispatch(startAudition(song))
  },
  filterOnChange: text => dispatch(filterSongs(text)),
  filterOnCancel: () => dispatch(filterSongs())
})

const connected = connect(mapStateToProps, mapDispatchToProps)(SongList)
const connectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header)
const connectedCancelButton = connect(mapStateToProps, mapDispatchToProps)(CancelButton)

connected.navigationOptions = SongListHeader(connectedHeader, connectedCancelButton)

export default connected
