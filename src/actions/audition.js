//@flow
import * as actionTypes from '../constants/actionTypes'
import {NativeModules} from 'react-native'

const {MediaHelper} = NativeModules

export const startAudition = (audioFile: object) => async (dispatch: Dispatch) => {
  //getting audition text

  //set text as full Text

  //generate missing words

  //set missing words
}

export const loadUserSongs = () => async (dispatch: Dispatch) => {
  const songs = await MediaHelper.getUserSongs()
  const userSongs = {}

  songs.forEach(section => {
    userSongs[section.artist] = section.items.sort((a, b) => {
      if (a.album > b.album) return 1
      if (a.album < b.album) return -1
      return 0
    })
  })

  dispatch({type: actionTypes.LOAD_USER_SONGS, userSongs})
}
