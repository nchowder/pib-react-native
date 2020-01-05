import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import styles from './authStyles'
import { withTheme } from 'react-native-elements'

class SignUp extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Sign Up'
  })

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordAgain: ''
    }
  }

  render() {
    const { navigation, theme } = this.props
    return (
      <View style={styles.mainView}>
        <TextInput
          style={styles.input}
          placeholder='First Name'
          onChangeText={(text) => this.setState({firstName: text})}
          secureTextEntry={false}
        />        
        <TextInput
          style={styles.input}
          placeholder='Last Name'
          onChangeText={(text) => this.setState({lastName: text})}
          secureTextEntry={false}
        />           
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
        <TextInput
          style={styles.input}
          placeholder='Password (again)'
          onChangeText={(text) => this.setState({passwordAgain: text})}
          secureTextEntry={true}
        />
        <Button
          title='Sign Up'
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop: 5, fontSize: 16, marginRight: 5}}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.replace('Login')}
          >
            <Text style={{marginTop: 5, fontSize: 16, color: theme.colors.primary}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default withTheme(SignUp)
