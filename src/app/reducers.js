import {combineReducers} from 'redux'
import curriculumReducer from '../curricula/reducers'
import authReducer from '../auth/reducers'

export default combineReducers({
  curriculum: curriculumReducer,
  auth: authReducer
})
