import * as actionTypes from '../constants/actionTypes'

const settings: Reducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default settings

/*
 Selectors
*/
export const getRepeatInterval = state => state.repeatInterval || 3
