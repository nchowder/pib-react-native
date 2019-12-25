/**
 * Reducer for displaying a model (i.e. curriculum name, list of modules, list of lessons)
 */

import { createSlice } from '@reduxjs/toolkit'
import {getCurriculumInfo, getModuleInfo} from '../../../api/studyhub-api'

const initialState = {
  curriculumInfo: {
    author: {
      display_name: ''
    },
    units: []
  },
  moduleInfo: {
    name: '',
    uuid: null,
    lessons: []
  },
}

// slice reducer
const moduleSlice = createSlice({
  name: 'module',
  initialState: initialState,
  reducers: {
    setModuleInfo(state, { payload }) {
      /**
       * payload: moduleUuid
       */
      state.moduleInfo = payload
    },
    setCurriculumInfo(state, { payload }) {
      /**
       * payload: curriculumUuid
       */
      state.curriculumInfo = payload
    },
    resetModule(state, { payload }) {
      state.moduleInfo = initialState.moduleInfo
    }
  }
})

// async functions
export function fetchCurriculumInfo(curriculumUuid) {
  // TODO error handling when loading curriculum info fails
  return async dispatch => {
    const curriculumInfo = await getCurriculumInfo(curriculumUuid)
    dispatch(setCurriculumInfo(curriculumInfo))
  }
}

export function fetchModuleInfo(moduleUuid) {
  // TODO error handling when loading module info fails
  return async dispatch => {
    const curriculumInfo = await getModuleInfo(moduleUuid)
    dispatch(setModuleInfo(curriculumInfo))
  }
}

// "ducks" pattern
// do named exports of action creators
export const { setModuleInfo, setCurriculumInfo, resetModule } = moduleSlice.actions

// do default export of reducer function
export default moduleSlice.reducer