//@flow
import * as actionTypes from '../constants/actionTypes'
import {NativeModules} from 'react-native'
import {getRepeatInterval, getUserSongs, getAuditionIsStarted, getAuditionAssetUrl,
  getAuditionCurrentMissingWordId, getAuditionMissingWordById} from '../reducer'
import {MEDIA_LIBRARY_LAST_MODIFIED} from '../constants/storageKeys'
import {localStorage} from '../services/localStorage'
import {getTextWithMissings} from '../services/lyrics'
import type {MediaHelperType, AudioItem} from '../types/mediaHelper'
import Config from 'react-native-config'

let MediaHelper: MediaHelperType
if (Config.USE_MEDIA_HELPER_MOCK == 'true') {
  MediaHelper = require('../devMocks/mediaHelper').MediaHelper
} else {
  MediaHelper = NativeModules.MediaHelper
}

export const filterSongs = (filter: string) => ({type: actionTypes.SET_AUDITION_FILTER, filter})

export const startAudition = (audioFile: AudioItem) => async (dispatch: Dispatch) => {
  const fullText = audioFile.lyrics
  const {missingWords, textWithMissings} = getTextWithMissings(fullText)

  dispatch({
    type: actionTypes.INIT_AUDITION,
    audition: {
      fullText,
      missingWords,
      textWithMissings,
      assetUrl: audioFile.assetUrl,
      auditionStarted: false,
      currentMissingWordId: -1
    }
  })
}

export const pauseAudition = () => dispatch => {
  MediaHelper.pauseSong()
  dispatch({type: actionTypes.PAUSE_AUDITION})
}

export const resumeAudition = () => (dispatch, getState) => {
  const state = getState()
  if (getAuditionIsStarted(state)) {
    MediaHelper.resumeSong()
  } else {
    MediaHelper.playSong(getAuditionAssetUrl(state))
  }

  dispatch({type: actionTypes.PLAY_AUDITION})
}

export const repeatAudition = () => (dispatch, getState) => {
  MediaHelper.repeatSong(getRepeatInterval(getState()))
}

export const finishAudition = () => (dispatch: Dispatch) => {
  MediaHelper.stopSong()
  dispatch({type: actionTypes.END_AUDITION})
}

export const loadUserSongs = () => async (dispatch: Dispatch, getState) => {
  const cachedLatModified = await localStorage.getItem(MEDIA_LIBRARY_LAST_MODIFIED)
  const lastModified = await MediaHelper.getMediaLibraryLastModified()
  const userSongs = getUserSongs(getState())

  if (cachedLatModified !== lastModified || Object.keys(userSongs).length === 0) {
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

export const selectMissingWord = (id: number) => ({type: actionTypes.SELECT_MISSING_WORD, id})
export const unselectMissingWord = () => ({type: actionTypes.SELECT_MISSING_WORD, id: -1})
export const setMissingWordAnswer = (id: number, answer: string) => ({type: actionTypes.SET_MISSING_WORD_ANSWER, answer, id})
export const setMissingWordWidth = (id: number, width: number) => ({type: actionTypes.SET_MISSING_WORD_WIDTH, id, width})

export const checkMissingWord = (id: number, afterCheckSuccess: () => {}, afterCheckFailure: () => {}) => (dispatch, getState) => {
  dispatch({type: actionTypes.CHECK_MISSING_WORD, id})
  const {correct, checked} = getAuditionMissingWordById(getState(), id)

  if (checked && correct && typeof afterCheckSuccess === 'function') {
    afterCheckSuccess()
  } else if (!correct && typeof afterCheckFailure === 'function') {
    afterCheckFailure()
  }
}
