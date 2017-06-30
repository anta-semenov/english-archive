import {createSelector} from 'reselect'
import {LOAD_USER_SONGS, SET_AUDITION_FILTER} from '../../constants/actionTypes.js'
import {mapValues} from 'lodash'

const audioItems = (state = {}, action) => {
  switch (action.type) {
    case LOAD_USER_SONGS:
      return {...state, userSongs: action.userSongs}

    case SET_AUDITION_FILTER:
      return {...state, filter: action.filter}

    default:
      return state
  }
}

export default audioItems

/*
 Selectors
*/
export const getAuditionFilter = state => (state || {}).filter || ''
export const getUserSongs = createSelector(
  getAuditionFilter,
  state => (state || {}).userSongs || {},
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
