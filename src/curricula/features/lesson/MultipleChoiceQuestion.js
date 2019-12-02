import React from 'react'
import {connect} from 'react-redux'
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import {Image, ButtonGroup} from 'react-native-elements'
import styles from './lessonStyles'
import ChoiceGroup from '../../components/choiceGroup'

class MultipleChoiceQuestion extends React.Component {
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
        {/* <ButtonGroup
          onPress={this.onChange.bind(this)}
          buttons={buttons}
          selectedIndex={this.state.selectedChoice}
        ></ButtonGroup> */}
        {/* <View>
          {this.props.question.choices.map((choice) => {
            <TouchableOpacity key={choice.uuid} style={{width:100, height:100}}>
              <Text>{choice.content.text}</Text>
              {choice.content.image? <Image 
                style={{width: 100, height: 100, resizeMode: 'contain'}}
                source={{uri: choice.content.image}}></Image>:null}
            </TouchableOpacity>
          })}
        </View> */}
        <ChoiceGroup 
          choices={choices}
          onPress={this.onChange.bind(this)}
          selectedIndex={this.state.selected}></ChoiceGroup>
      </View>
    )
  }
}

export default MultipleChoiceQuestion