import * as actionTypes from '../../constants/actionTypes'
import missingWords, * as fromMissingWords from './missingWords'
import type MissingWordsState from './missingWords'
import {isNumber} from 'lodash'

export interface AuditionState {
  fullText: string,
  missingWords: MissingWordsState,
  textWithMissings: string[],
  assetUrl: string,
  auditionStarted: boolean,
  currentMissingWordId: number,
  currentMissingWordAnswer?: string
}

const audition: Reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CHECK_MISSING_WORD:
    case actionTypes.SET_MISSING_WORD_ANSWER:
      return {...state, missingWords: missingWords(state.missingWords, action)}

    case actionTypes.INIT_AUDITION: {
      return action.audition
    }

    case actionTypes.SET_AUDIO_FILE_PROGRESS:
      return {...state, audioFileProgress: action.progress}

    case actionTypes.END_AUDITION:
      return {}

    case actionTypes.PAUSE_AUDITION:
      return {...state, isPlaying: false}

    case actionTypes.PLAY_AUDITION:
      return {...state, isPlaying: true, auditionStarted: true}

    case actionTypes.SELECT_MISSING_WORD:
      return {...state, currentMissingWordId: action.id}

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
  module.exports[key] = (state, ...args) => fromMissingWords[key](state.missingWords, ...args)
})

export const getAuditionIsPlaying = state => state.isPlaying || false
export const getAuditionIsStarted = (state: AuditionState): boolean => state.auditionStarted || false
export const getAuditionAssetUrl = (state: AuditionState): string => state.assetUrl || ''
export const getAuditionTextWithMissings = (state: AuditionState): string[] => state.textWithMissings || []
export const getAuditionCurrentMissingWordId = (state: AuditionState): number => isNumber(state.currentMissingWordId) ? state.currentMissingWordId : -1
export const getAuditionCurrentMissingWordAnswer = (state: AuditionState): string =>
  fromMissingWords.getAuditionMissingWordById(state.missingWords, state.currentMissingWordId).answer
