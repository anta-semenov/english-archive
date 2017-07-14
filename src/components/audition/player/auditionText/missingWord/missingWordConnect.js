import {connect} from 'react-redux'
import MissingWord from './MissingWord'
import * as actions from '../../../../../actions/index.js'
import * as fromReducer from '../../../../../reducer/index.js'

const mapStateToProps = (state, {id}) => {
  const currentMissingWordsId = fromReducer.getAuditionCurrentMissingWordId(state)
  return ({
    missingWordData: fromReducer.getAuditionMissingWordById(state, id),
    input: id == currentMissingWordsId
  })
}

const mapDispatchToProps = (dispatch, {id}) => ({
  selectMissingWord: () => {
    dispatch(actions.selectMissingWord(id))
    //scrollToItem()
  },
  onInputChange: (newValue: string) => dispatch(actions.setMissingWordAnswer(id, newValue))
})

export default connect(mapStateToProps, mapDispatchToProps)(MissingWord)
