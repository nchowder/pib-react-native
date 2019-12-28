import React from 'react'
import {connect} from 'react-redux'
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import {Image, ButtonGroup, Button} from 'react-native-elements'
import styles from './lessonStyles'
import ChoiceGroup from '../../components/choiceGroup'

class MultipleChoiceQuestion extends React.Component {
  constructor(props) {
    super(props)

    let selected
    if (props.multiSelect) {
      selected = new Array(this.props.question.choices.length)
    } else {
      selected = null
    }

    this.state = {
      selected: selected,
      hintVisible: false
    }
  }
  
  onChange(selectedIndex) {
    let newAnswer
    if (this.props.multiSelect) {
      let answerList

      const newSelected = this.state.selected.slice()
      newSelected[selectedIndex] = !newSelected[selectedIndex]
      
      // change selected indices
      this.setState({selected: newSelected})
      
      // change answer
      answerList = newSelected.map((item, index) => item? {uuid: this.props.question.choices[index]['uuid']} : null).filter(item => item)
      newAnswer = {
        answers_list: answerList
      }
    } else {
      if (selectedIndex == this.state.selected) {
        // deselect
        this.setState({selected: null})
      } else {
        // select
        this.setState({selected: selectedIndex})
      }

      // change answer
      newAnswer = {
        answer: {
          uuid: this.props.question.choices[selectedIndex]['uuid']
        }
      }
    }

    this.props.changeAnswer(newAnswer)
  }

  toggleHint() {
    this.setState({hintVisible: !this.state.hintVisible})
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
        {this.props.question.hint?<Button
          type='clear'
          title='Hint'
          onPress={this.toggleHint.bind(this)}
        />:null}
        {this.state.hintVisible?<Text>{this.props.question.hint}</Text>:null}
        <ChoiceGroup 
          choices={choices}
          onPress={this.onChange.bind(this)}
          selectedIndex={this.state.selected}></ChoiceGroup>
      </View>
    )
  }
}

MultipleChoiceQuestion.defaultProps = {
  multiSelect: false
}

export default MultipleChoiceQuestion