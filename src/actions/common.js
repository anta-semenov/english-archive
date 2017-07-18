import {LOAD_STATE} from '../constants/actionTypes'
import {localStorage} from '../services/localStorage'
import {STATE, STATE_VERSION} from '../constants/storageKeys'
import {stateVersion} from '../constants/config'
import {filterSongs} from './audition'

export const loadState = () => async (dispatch) => {
  const currentStateVersion = await localStorage.getItem(STATE_VERSION)

  if (currentStateVersion == stateVersion) {
    const state = await localStorage.getItem(STATE)
    if (state) {
      dispatch({type: LOAD_STATE, state})
      dispatch(filterSongs(''))
    }
  } else {
    await localStorage.clear()
    localStorage.setItem(STATE_VERSION, stateVersion)
  }
}
