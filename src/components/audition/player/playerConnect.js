import {connect} from 'react-redux'
import {pauseAudition, repeatAudition, finishAudition, resumeAudition} from '../../../actions/audition'
import Player from './Player'
import * as fromReducer from '../../../reducer'

const mapStateToProps = state => ({
  isPlaying: fromReducer.getAuditionIsPlaying(state),
  repeatInterval: fromReducer.getRepeatInterval(state),
  textWithMissings: fromReducer.getAuditionTextWithMissings(state),
  currentMissingWordId: fromReducer.getAuditionCurrentMissingWordId(state),
  currentMissingWordAnswer: fromReducer.getAuditionCurrentMissingWordAnswer(state)
})

const mapDispatchToProps = (dispatch, {closePlayer}) => ({
  pause: () => dispatch(pauseAudition()),
  resume: () => dispatch(resumeAudition()),
  repeat: () => dispatch(repeatAudition()),
  stop: () => {
    dispatch(finishAudition())
    closePlayer()
  }
})

const connected = connect(mapStateToProps, mapDispatchToProps)(Player)

export default connected
