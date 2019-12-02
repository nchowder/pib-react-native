import { combineReducers } from 'redux'
import lessonReducer from '../features/lesson/lessonSlice'
import moduleReducer from '../features/module/moduleSlice'

export default combineReducers({
  lesson: lessonReducer,
  module: moduleReducer
})
