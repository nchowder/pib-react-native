
import { createStackNavigator, createAppContainer } from 'react-navigation'
import CurriculumScreen from '../curricula/CurriculumScreen'
import ModuleScreen from '../curricula/ModuleScreen'

const AppNavigator = createStackNavigator({
	Home: CurriculumScreen,
	Module: ModuleScreen
})

export default createAppContainer(AppNavigator)
