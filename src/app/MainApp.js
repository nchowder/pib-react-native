
import { createStackNavigator, createAppContainer } from 'react-navigation'
import CurriculumScreen from '../curricula/CurriculumScreen'
import ModuleScreen from '../curricula/ModuleScreen'
import LessonScreen from '../curricula/LessonScreen'

const AppNavigator = createStackNavigator({
  Home: CurriculumScreen,
  Module: ModuleScreen,
  Lesson: LessonScreen
})

export default createAppContainer(AppNavigator)
