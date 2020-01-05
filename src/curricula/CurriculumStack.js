import CurriculumScreen from './features/module/CurriculumScreen'
import ModuleScreen from './features/module/ModuleScreen'
import LessonScreen from './features/lesson/LessonScreen'

import { createStackNavigator } from 'react-navigation-stack'


const CurriculumStack = createStackNavigator({
  Home: {screen: CurriculumScreen},
  Module: {screen: ModuleScreen},
  Lesson: {screen: LessonScreen}
})

export default CurriculumStack
