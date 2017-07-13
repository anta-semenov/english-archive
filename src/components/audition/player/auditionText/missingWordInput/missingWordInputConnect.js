import {connect} from 'react-redux'
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

const mapDispatchToProps = dispatch => ({
  onInputChange: (id: number) => (newValue: string) => dispatch(actions.setMissingWordAnswer(id, newValue)),
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  missingWordData: stateProps.missingWordData,
  onInputChange: dispatchProps.onInputChange(stateProps.id)
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(MissingWordInput)
