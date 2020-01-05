import LoginScreen from './features/auth/LoginScreen'
import SignUpScreen from './features/auth/SignupScreen'

import { createStackNavigator } from 'react-navigation-stack'


const LoginStack = createStackNavigator({
  Login: {screen: LoginScreen},
  SignUp: {screen: SignUpScreen}
})

export default LoginStack
