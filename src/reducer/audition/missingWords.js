import * as actionTypes from '../../constants/actionTypes'
import {MissingWordType} from '../../services/lyrics'

const missingWords: Reducer = (state = {}, action) => {
  const {id} = action
  switch (action.type) {
    case actionTypes.CHECK_MISSING_WORD:
    case actionTypes.SET_MISSING_WORD_ANSWER:
     return {...state, [id]: missingWord(state[id], action)}
    default:
      return state
  }
}

const missingWord: Reducer = (state: MissingWordType = {}, action) => {
  const {answer, word} = state
  switch (action.type) {
    case actionTypes.CHECK_MISSING_WORD:
      return {...state, checked: true, correct: !!answer && word.toLowerCase().replace(/\.|,|\(|\)/g, '') === answer.toLowerCase().replace(/\.|,|\(|\)/g, '')}
    case actionTypes.SET_MISSING_WORD_ANSWER:
      return {...state, answer: action.answer, checked: false}
    default:
      return state
  }
}

export default missingWords

/*
 Selectors
*/

export const getAuditionMissingWordById = (state = {}, id) => state[id] || {}
export const getAuditionMissingWordsIds = (state = {}) => Object.keys(state)
