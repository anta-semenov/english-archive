import {connect} from 'react-redux'
import SongList from './SongList'
import * as fromReducer from '../../../reducer'
import {startAudition} from '../../../actions/audition'
import {audition} from '../../../constants/routes'

const mapStateToProps = state => ({
  data: fromReducer.getUserSongs(state)
})

const mapDispatchToProps = (dispatch, {navigation}) => ({
  onPress: song => {
    dispatch(startAudition(song))
    navigation.navigate(audition.player)
  }
})

const connected = connect(mapStateToProps, mapDispatchToProps)(SongList)

connected.navigationOptions = {
  title: 'Choose song'
}

export default connected
