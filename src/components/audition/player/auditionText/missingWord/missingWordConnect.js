import {connect} from 'react-redux'
import {Dimensions} from 'react-native'
import MissingWord from './MissingWord'
import * as actions from '../../../../../actions/index.js'
import * as fromReducer from '../../../../../reducer/index.js'
import {layout} from '../../../../../constants/styleVariables'

const screenHeight = Dimensions.get('window').height

const mapStateToProps = (state, {id}) => {
  const currentMissingWordsId = fromReducer.getAuditionCurrentMissingWordId(state)
  return ({
    missingWordData: fromReducer.getAuditionMissingWordById(state, id),
    input: id == currentMissingWordsId
  })
}

const mapDispatchToProps = (dispatch, {id, scrollToItem}) => ({
  selectMissingWord: (loacationY: number) => {
    if (loacationY > (screenHeight - layout.keyboardHeight)) {
      scrollToItem()
    }
    dispatch(actions.selectMissingWord(id))
  },
  onInputChange: (newValue: string) => dispatch(actions.setMissingWordAnswer(id, newValue))
})

export default connect(mapStateToProps, mapDispatchToProps)(MissingWord)
