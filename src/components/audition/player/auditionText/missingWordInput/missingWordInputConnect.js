import {connect} from 'react-redux'
import {Keyboard} from 'react-native'
import MissingWordInput from './MissingWordInput'
import * as actions from '../../../../../actions/index.js'
import * as fromReducer from '../../../../../reducer/index.js'

const mapStateToProps = state => {
  const missingWordId = fromReducer.getAuditionCurrentMissingWordId(state)
  return ({
    missingWordData: fromReducer.getAuditionMissingWordById(state, missingWordId),
    id: missingWordId
  })
}

const mapDispatchToProps = dispatch => {
  const unselectMissingWord = () => {
    dispatch(actions.unselectMissingWord())
    Keyboard.dismiss()
  }

  return ({
    onInputChange: (id: number) => (newValue: string) => {console.log('newValue', newValue);dispatch(actions.setMissingWordAnswer(id, newValue))},
    checkMissingWord: id => () => dispatch(actions.checkMissingWord(
      id,
      unselectMissingWord
    )),
    unselectMissingWord
  })
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  missingWordData: stateProps.missingWordData,
  onInputChange: dispatchProps.onInputChange(stateProps.id),
  checkMissingWord: dispatchProps.checkMissingWord(stateProps.id),
  unselectMissingWord: dispatchProps.unselectMissingWord
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(MissingWordInput)
