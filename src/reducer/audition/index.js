import {combineReducers} from 'redux'
import audioItems, * as fromAudioItems from './audioItems'
import auditionExercise, * as fromAuditionExercise from './auditionExercise'

const audition = combineReducers({
  audioItems,
  auditionExercise
})

export default audition

Object.keys(fromAudioItems).forEach(key => {
  if (key === 'default')     return
  module.exports[key] = state => fromAudioItems[key](state.audioItems)
})

Object.keys(fromAuditionExercise).forEach(key => {
  if (key === 'default')     return
  module.exports[key] = (state, ...args) => fromAuditionExercise[key](state.auditionExercise, ...args)
})
