/**
 * Reducer for interacting with a lesson (i.e. load and respond to questions)
 */

import { createSlice } from '@reduxjs/toolkit'
import {getNextQuestion, getSubmitResponse} from '../../../api/studyhub-api'

const initialState = {
  lessonUuid: null,
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
  status: {
    score: 0
  }
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
    },
    setLessonUuid(state, { payload }) {
      state.lessonUuid = payload
    },
    clearResponse(state) {
      state.currentAnswer = {}
      state.response.was_correct = null
    },
    changeScore(state, { payload }) {
      state.status.score += payload
    }
  }
})

// async functions
export function fetchNextQuestion() {
  // TODO error handling
  return async (dispatch, getState) => {
    const state = getState().curriculum.lesson
    console.log(state.lessonUuid, state.questionInfo.uuid)
    const questionInfo = await getNextQuestion(state.lessonUuid, state.questionInfo.uuid)
    dispatch(setNextQuestion(questionInfo))
    dispatch(clearResponse())
  }
}

export function fetchResponse(questionUuid, responseJson) {
  /**
   * Check the current answer
   */
  // TODO error handling
  return async dispatch => {
    const response = await getSubmitResponse(questionUuid, responseJson)
    dispatch(setResponse(response))
    dispatch(changeScore(response.score))
  }
}

export const { setNextQuestion, setResponse, setCurrentAnswer, setLessonUuid, clearResponse, changeScore } = lessonSlice.actions
export default lessonSlice.reducer