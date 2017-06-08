import {createSelector} from 'reselect'
import * as actionTypes from '../../constants/actionTypes'
import missingWords, * as fromMissingWords from './missingWords'
import mapValues from 'lodash/mapValues'

const audition: Reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CHECK_WORD:
      return {...state, missingWords: missingWords(state.missingWords, action)}

    case actionTypes.INIT_AUDITION:
      return action.audition

    case actionTypes.SET_AUDIO_FILE_PROGRESS:
      return {...state, audioFileProgress: action.progress}

    case actionTypes.END_AUDITION:
      return {userSongs: state.userSongs, filter: state.filter}

    case actionTypes.LOAD_USER_SONGS:
      return {...state, userSongs: action.userSongs}

    case actionTypes.PAUSE_AUDITION:
      return {...state, isPlaying: false}

    case actionTypes.PLAY_AUDITION:
      return {...state, isPlaying: true}

    case actionTypes.SET_AUDITION_FILTER:
      return {...state, filter: action.filter}

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

export const getAuditionFilter = state => state.filter || ''
export const getUserSongs = createSelector(
  getAuditionFilter,
  state => state.userSongs || {},
  (filter, songs) => {
    if (!filter) return songs

    return mapValues(songs, item => {
      if (Array.isArray(item)) {
        const lowCaseFilter = filter.toLowerCase()
        return item.filter(
          ({title, artist, album}) =>
            title.toLowerCase().includes(lowCaseFilter) ||
            artist.toLowerCase().includes(lowCaseFilter) ||
            album.toLowerCase().includes(lowCaseFilter)
        )
      }

      return item
    })
  }
)
export const getAuditionIsPlaying = state => state.isPlaying || false
