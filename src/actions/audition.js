//@flow
import * as actionTypes from '../constants/actionTypes'
import {NativeModules} from 'react-native'
import * as fromReducer from '../reducer'
import {MEDIA_LIBRARY_LAST_MODIFIED} from '../constants/storageKeys'
import {localStorage} from '../utils/localStorage'
import {getTextWithMissings} from '../utils/lyrics'

const {MediaHelper} = NativeModules

export const filterSongs = (filter: string) => ({type: actionTypes.SET_AUDITION_FILTER, filter})

export const startAudition = (audioFile) => async (dispatch: Dispatch) => {
  const fullText = audioFile.lyrics
  const {missingWords, textWithMissings} = getTextWithMissings(fullText)

  dispatch({
    type: actionTypes.INIT_AUDITION,
    fullText,
    missingWords,
    textWithMissings
  })

  //set missing words
  MediaHelper.playSong(audioFile.assetUrl)
  dispatch({type: actionTypes.PLAY_AUDITION})
}

export const pauseAudition = () => dispatch => {
  MediaHelper.pauseSong()
  dispatch({type: actionTypes.PAUSE_AUDITION})
}

export const resumeAudition = () => dispatch => {
  MediaHelper.resumeSong()
  dispatch({type: actionTypes.PLAY_AUDITION})
}

export const repeatAudition = () => (dispatch, getState) => {
  MediaHelper.repeatSong(fromReducer.getRepeatInterval(getState()))
}

export const finishAudition = () => dispatch => {
  MediaHelper.stopSong()
  dispatch({type: actionTypes.END_AUDITION})
}

export const loadUserSongs = () => async (dispatch: Dispatch, getState) => {
  const cachedLatModified = await localStorage.getItem(MEDIA_LIBRARY_LAST_MODIFIED)
  const lastModified = await MediaHelper.getMediaLibraryLastModified()
  const userSongs = fromReducer.getUserSongs(getState())

  if (cachedLatModified !== lastModified || Object.keys(userSongs) === 0) {
    const songs = await MediaHelper.getUserSongs()

    if (songs.length > 0) {
      localStorage.setItem(MEDIA_LIBRARY_LAST_MODIFIED, lastModified)
    }
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
}
