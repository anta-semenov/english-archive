import {connect} from 'react-redux'
import MissingWordLabel from './MissingWordLabel'
import * as actions from '../../../../../actions/index.js'
import * as fromReducer from '../../../../../reducer/index.js'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(MissingWordLabel)
