import {combineReducers} from 'redux'
import curriculumReducer from '../curricula/CurriculumReducer'

export default combineReducers({
  curriculum: curriculumReducer
})