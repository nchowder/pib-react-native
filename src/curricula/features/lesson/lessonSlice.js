/**
 * Reducer for interacting with a lesson (i.e. load and respond to questions)
 */

import { createSlice } from '@reduxjs/toolkit'
import {getNextQuestion, getSubmitResponse} from '../../../api/studyhub-api'

const initialState = {
  questionInfo: {
    text: '',
    uuid: null,
    choices: []
  },
  currentAnswer : {},
  response: {
    score: 0,
    status: 0,
    completed_on: null,
    required_score: 80,
    was_correct: null
  },
}

const lessonSlice = createSlice({
  name: 'lesson',
  initialState: initialState,
  reducers: {
    setNextQuestion(state, { payload }) {
      state.questionInfo = payload
    },
    setResponse(state, { payload }) {
      state.response = payload
    },
    setCurrentAnswer(state, { payload }) {
      state.currentAnswer = payload
    }
  }
})

// async functions
export function fetchNextQuestion(lessonUuid) {
  // TODO error handling
  return async dispatch => {
    const questionInfo = await getNextQuestion(lessonUuid)
    dispatch(setNextQuestion(questionInfo))
  }
}

export function fetchResponse(questionUuid, responseJson) {
  // TODO error handling
  return async dispatch => {
    const response = await getSubmitResponse(questionUuid, responseJson)
    dispatch(setResponse(response))
  }
}

export const { setNextQuestion, setResponse, setCurrentAnswer } = lessonSlice.actions
export default lessonSlice.reducer