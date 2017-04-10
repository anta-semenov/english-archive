import * as actionTypes from '../../constants/actionTypes'
import missingWords, * as fromMissingWords from './missingWords'

const audition: Reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CHECK_WORD:
      return {...state, missingWords: missingWords(state.missingWords, action)}

    case actionTypes.INIT_AUDITION:
      return action.audition

    case actionTypes.SET_AUDIO_FILE_PROGRESS:
      return {...state, audioFileProgress: action.progress}

    case actionTypes.END_AUDITION:
      return {userSongs: state.userSongs}

    case actionTypes.LOAD_USER_SONGS:
      return {...state, userSongs: action.userSongs}

    default:
      return state
  }
}

export default audition

/*
 Selectors
*/
Object.keys(fromMissingWords).forEach(key => {
  if (key === 'default')     return
  module.exports[key] = state => fromMissingWords[key](state.missingWords)
})

export const getUserSongs = state => state.userSongs || {}
