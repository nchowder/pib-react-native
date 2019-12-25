// TODO use WebView implementation for non-multiple-choice questions
// do not use this class

import React from 'react'
import {connect} from 'react-redux'
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import {Image, ButtonGroup} from 'react-native-elements'
import styles from './lessonStyles'
import ChoiceGroup from '../../components/choiceGroup'

class VectorQuestion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null
    }
  }
  
  onChange(selectedIndex) {
    if (selectedIndex == this.state.selected) {
      // deselect
      this.setState({selected: null})
    } else {
      // select
      this.setState({selected: selectedIndex})
    }
    const newAnswer = {
      answer: {
        uuid: this.props.question.choices[selectedIndex]['uuid']
      }
    }
    this.props.changeAnswer(newAnswer)
  }

  render() {
    const choices = this.props.question.choices.map((choice) => <View>
      <Text>{choice.content.text}</Text></View>)
    return (
      <View style={styles.question}>
        <Text>{this.props.question.text}</Text>
        {this.props.question.image? <Image 
          style={styles.questionImage}
          source={{uri: this.props.question.image}}></Image>:null}

        <ChoiceGroup 
          choices={choices}
          onPress={this.onChange.bind(this)}
          selectedIndex={this.state.selected}></ChoiceGroup>
      </View>
    )
  }
}

export default VectorQuestion