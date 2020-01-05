import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import styles from './authStyles'

class Login extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Login'
  })

  render() {
    return (
      <View style={styles.mainView}>           
        <TextInput
          style={styles.input}
          autoCompleteType='email'
          placeholder='Email'
          keyboardType='email-address'
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
        />
        <Button
          title='Login'
        />
      </View>
    )
  }
}

export default Login
