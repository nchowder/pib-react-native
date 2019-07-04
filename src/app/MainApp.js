
import { createStackNavigator, createAppContainer } from 'react-navigation'
import CurriculumScreen from '../curricula/CurriculumScreen'

const AppNavigator = createStackNavigator({
	Home: CurriculumScreen
})

export default createAppContainer(AppNavigator)
