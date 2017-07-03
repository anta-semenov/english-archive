import * as actionTypes from '../../constants/actionTypes'
import missingWords, * as fromMissingWords from './missingWords'
import type MissingWordsState from './missingWords'

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
    case actionTypes.CHECK_WORD:
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

export const getAuditionIsPlaying = state => state.isPlaying || false
export const getAuditionIsStarted = (state: AuditionState): boolean => state.auditionStarted || false
export const getAuditionAssetUrl = (state: AuditionState): string => state.assetUrl || ''
export const getAuditionTextWithMissings = (state: AuditionState): string[] => state.textWithMissings || []
export const getAuditionCurrentMissingWordId = (state: AuditionState): number => state.currentMissingWordId || -1
export const getAuditionCurrentMissingWordAnswer = (state: AuditionState): string => state.currentMissingWordAnswer || ''
