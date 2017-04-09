import {combineReducers} from 'redux'
import audition, * as fromAudition from './audition'
import settings, * as fromSettings from './settings'
import ui, * as fromUi from './ui'

const rootReducer: Reducer = combineReducers({
  audition,
  settings,
  ui
})

export default rootReducer

Object.keys(fromAudition).forEach(key => {
  if (key === 'default') return
  module.exports[key] = state => fromAudition[key](state.audition)
})

Object.keys(fromSettings).forEach(key => {
  if (key === 'default')     return
  module.exports[key] = state => fromSettings[key](state.settings)
})

Object.keys(fromUi).forEach(key => {
  if (key === 'default')     return
  module.exports[key] = state => fromUi[key](state.ui)
})
