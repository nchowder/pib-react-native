import LoginScreen from './features/auth/LoginScreen'

import { createStackNavigator } from 'react-navigation-stack'


const LoginStack = createStackNavigator({
  Login: {screen: LoginScreen},
})

export default LoginStack
