import {connect} from 'react-redux'
import {StatusBar} from 'react-native'
import {pauseAudition, repeatAudition, finishAudition, resumeAudition} from '../../../actions/audition'
import Player from './Player'
import {colors} from '../../../constants/styleVariables'
import * as fromReducer from '../../../reducer'

const mapStateToProps = state => ({
  isPlaying: fromReducer.getAuditionIsPlaying(state)
})

const mapDispatchToProps = (dispatch, {navigation}) => ({
  pause: () => dispatch(pauseAudition()),
  resume: () => dispatch(resumeAudition()),
  repeat: () => dispatch(repeatAudition()),
  stop: () => {
    dispatch(finishAudition())
    navigation.goBack()
    StatusBar.setHidden(false)
  }
})

const connected = connect(mapStateToProps, mapDispatchToProps)(Player)

connected.navigationOptions = {
  header: {
    style: {
      height: 0,
      opacity: 0,
      backgroundColor: colors.firstLight
    }
  }
}

export default connected
