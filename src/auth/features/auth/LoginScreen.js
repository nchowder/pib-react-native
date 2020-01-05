import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import styles from './authStyles'
import { withTheme } from 'react-native-elements'

class Login extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Login'
  })

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    const { theme, navigation } = this.props

    return (
      <View style={styles.mainView}>           
        <TextInput
          style={styles.input}
          autoCompleteType='email'
          placeholder='Email'
          keyboardType='email-address'
          onChangeText={(text) => this.setState({email: text})}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          onChangeText={(text) => this.setState({password: text})}
          secureTextEntry={true}
        />
        <Button
          title='Login'
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop: 5, fontSize: 16, marginRight: 5}}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.replace('SignUp')}
          >
            <Text style={{marginTop: 5, fontSize: 16, color: theme.colors.primary}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default withTheme(Login)
