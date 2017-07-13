import {connect} from 'react-redux'
import {Keyboard} from 'react-native'
import AuditionButtonsPane from './AuditionButtonsPane'
import * as actions from '../../../../../actions/index.js'
import * as fromReducer from '../../../../../reducer/index.js'

const mapStateToProps = state => ({
  id: fromReducer.getAuditionCurrentMissingWordId(state)
})

const mapDispatchToProps = dispatch => {
  const unselectMissingWord = () => {
    dispatch(actions.unselectMissingWord())
    Keyboard.dismiss()
  }

  return ({
    checkMissingWord: id => () => dispatch(actions.checkMissingWord(
      id,
      unselectMissingWord
    )),
    unselectMissingWord
  })
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  checkMissingWord: dispatchProps.checkMissingWord(stateProps.id),
  unselectMissingWord: dispatchProps.unselectMissingWord
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AuditionButtonsPane)
