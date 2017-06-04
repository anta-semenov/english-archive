//@flow
import * as actionTypes from '../constants/actionTypes'
import {NativeModules} from 'react-native'

const {MediaHelper} = NativeModules

export const filterSongs = filter => ({type: actionTypes.SET_AUDITION_FILTER, filter})

export const startAudition = (audioFile: object) => async (dispatch: Dispatch) => {
  MediaHelper.playSong(audioFile.assetUrl)
  dispatch({type: actionTypes.PLAY_AUDITION})
  //getting audition text

  //set text as full Text

  //generate missing words

  //set missing words
}

export const pauseAudition = () => dispatch => {
  MediaHelper.pauseSong()
  dispatch({type: actionTypes.PAUSE_AUDITION})
}

export const resumeAudition = () => dispatch => {
  MediaHelper.resumeSong()
  dispatch({type: actionTypes.PLAY_AUDITION})
}

export const repeatAudition = () => dispatch => {
  MediaHelper.repeatSong(3)
}

export const finishAudition = () => dispatch => {
  MediaHelper.stopSong()
  dispatch({type: actionTypes.END_AUDITION})
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
