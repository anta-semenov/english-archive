import * as actionTypes from '../../constants/actionTypes'
import missingWords, * as fromMissingWords from './missingWords'
import type MissingWordsState from './missingWords'
import type {AuditionTextStatus} from '../../types'

export interface AuditionExerciseState {
  fullText: string,
  missingWords: MissingWordsState,
  textWithMissings: string[],
  assetUrl: string,
  auditionStarted: boolean,
  currentMissingWordId: number,
  currentMissingWordAnswer?: string,
  textStatus: AuditionTextStatus,
  textMessage: string
}

const initialState: AuditionExerciseState = {
  missingWords: {},
  isPlaying: false,
  fullText: '',
  textWithMissings: [],
  assetUrl: '',
  auditionStarted: false,
  currentMissingWordId: -1,
  currentMissingWordAnswer: '',
  textStatus: 'none',
  textMessage: ''
}

const auditionExercise: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHECK_MISSING_WORD:
    case actionTypes.SET_MISSING_WORD_ANSWER:
      return {...state, missingWords: missingWords(state.missingWords, action)}

    case actionTypes.INIT_AUDITION: {
      return action.audition
    }

    case actionTypes.INIT_AUDITION_TEXT: {
      const {textWithMissings, missingWords, fullText, currentMissingWordId} = action
      return {...state, textWithMissings, missingWords, fullText, currentMissingWordId}
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

    case actionTypes.SET_AUDITION_TEXT_STATUS:
      return {...state, textStatus: action.status, textMessage: action.message}

    default:
      return state
  }
}

export default auditionExercise

/*
 Selectors
*/
Object.keys(fromMissingWords).forEach(key => {
  if (key === 'default')     return
  module.exports[key] = (state, ...args) => fromMissingWords[key](state.missingWords, ...args)
})

export const getAuditionIsPlaying = state => state.isPlaying
export const getAuditionIsStarted = (state: AuditionExerciseState): boolean => state.auditionStarted
export const getAuditionAssetUrl = (state: AuditionExerciseState): string => state.assetUrl
export const getAuditionTextWithMissings = (state: AuditionExerciseState): string[] => state.textWithMissings
export const getAuditionCurrentMissingWordId = (state: AuditionExerciseState): number => state.currentMissingWordId
export const getAuditionCurrentMissingWordAnswer = (state: AuditionExerciseState): string =>
  fromMissingWords.getAuditionMissingWordById(state.missingWords, state.currentMissingWordId).answer
export const getAuditionTextStatus = ({textStatus, textMessage}: AuditionExerciseState) => ({status: textStatus, message: textMessage})
