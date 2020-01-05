
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import CurriculumStack from '../curricula/CurriculumStack'
import LoginStack from '../auth/LoginStack'

const AppNavigator = createDrawerNavigator({
  Home: {screen: CurriculumStack},
  Login: {screen: LoginStack}
})

export default createAppContainer(AppNavigator)
