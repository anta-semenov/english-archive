import {connect} from 'react-redux'
import {Keyboard} from 'react-native'
import AuditionButtonsPane from './AuditionButtonsPane'
import * as actions from '../../../../../actions/index.js'
import * as fromReducer from '../../../../../reducer/index.js'

const mapStateToProps = state => ({
  id: fromReducer.getAuditionCurrentMissingWordId(state),
  ids: fromReducer.getAuditionMissingWordsIds(state)
})

const mapDispatchToProps = (dispatch, {scrollToId}) => {
  const unselectMissingWord = () => {
    dispatch(actions.unselectMissingWord())
    Keyboard.dismiss()
  }

  return ({
    checkMissingWord: (id, ids) => () => dispatch(actions.checkMissingWord(
      id,
      () => {
        const indexOfId = ids.indexOf(`${id}`)
        if (indexOfId >= 0 && indexOfId < (ids.length - 1)) {
          const nextId = +ids[indexOfId + 1]
          scrollToId(nextId)
          dispatch(actions.selectMissingWord(nextId))
        } else {
          unselectMissingWord()
        }
      }
    )),
    unselectMissingWord
  })
}

const mergeProps = ({id, ids}, dispatchProps, ownProps) => ({
  ...ownProps,
  id,
  checkMissingWord: dispatchProps.checkMissingWord(id, ids),
  unselectMissingWord: dispatchProps.unselectMissingWord
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AuditionButtonsPane)
