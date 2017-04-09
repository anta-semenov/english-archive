import {connect} from 'react-redux'
import SongList from './SongList'
import * as fromReducer from '../../../reducer'
import {startAudition} from '../../../actions/audition'
import {audition} from '../../../constants/routes'

const mapStateToProps = state => ({
  data: fromReducer.getUserSongs(state)
})

const mapDispatchToProps = (dispatch, {navigation}) => ({
  onTap: song => {
    dispatch(startAudition(song))
    navigation.navigate(audition.player)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SongList)
