import {connect} from 'react-redux'
import MissingWordLabel from './MissingWordLabel'
import * as actions from '../../../../../actions/index.js'
import * as fromReducer from '../../../../../reducer/index.js'

const mapStateToProps = (state, {id}) => ({
  missingWordData: fromReducer.getAuditionMissingWordById(state, id)
})

const mapDispatchToProps = (dispatch, {scrollToItem, id}) => ({
  selectMissingWord: () => {
    dispatch(actions.selectMissingWord(id))
    //scrollToItem()
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MissingWordLabel)
