import {combineReducers} from 'redux'
import curriculumReducer from '../curricula/reducers'

export default combineReducers({
  curriculum: curriculumReducer
})
