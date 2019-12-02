
import { createStackNavigator, createAppContainer } from 'react-navigation'
import CurriculumScreen from '../curricula/features/module/CurriculumScreen'
import ModuleScreen from '../curricula/features/module/ModuleScreen'
import LessonScreen from '../curricula/features/lesson/LessonScreen'

const AppNavigator = createStackNavigator({
  Home: CurriculumScreen,
  Module: ModuleScreen,
  Lesson: LessonScreen
})

export default createAppContainer(AppNavigator)
