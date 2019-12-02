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
  responseInfo: {
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
    loadNextQuestion(state, action) {
      const lessonUuid = action.payload
      state.lessonInfo = getNextQuestion(lessonUuid)
    },
    submitResponse(state, action) {
      const {questionUuid, responseJson} = action.payload
      state.responseInfo = getSubmitResponse(questionUuid, responseJson)
    }
  }
})

export const { loadNextQuestion, submitResponse } = lessonSlice.actions
export default lessonSlice.reducer