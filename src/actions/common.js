import {LOAD_STATE} from '../constants/actionTypes'
import {localStorage} from '../utils/localStorage'
import {STATE} from '../constants/storageKeys'

export const loadState = () => async (dispatch) => {
  const state = await localStorage.getItem(STATE)

  if (state) {
    dispatch({type: LOAD_STATE, state})
  }
}
