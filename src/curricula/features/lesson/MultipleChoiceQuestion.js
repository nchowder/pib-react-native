import React from 'react'
import {connect} from 'react-redux'
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import {Image, ButtonGroup, Button} from 'react-native-elements'
import styles from './lessonStyles'
import ChoiceGroup from '../../components/choiceGroup'

class MultipleChoiceQuestion extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: [],  // array of uuids
      correct: [],
      incorrect: [],
      hintVisible: false
    }
  }
  
  onChange(selectedUuid) {
    // if submitted, don't accept anything
    if (this.props.wasCorrect != null) return
    let newAnswer
    if (this.props.multiSelect) {
      let newSelected = [...this.state.selected]

      // toggle selected uuid
      if (newSelected.includes(selectedUuid)) {
        newSelected = newSelected.filter(item => item !== selectedUuid)
      } else {
        newSelected.push(selectedUuid)
      }
      
      // change selected indices
      this.setState({selected: newSelected})
      
      // change answer
      const answerList = newSelected.map(k => ({uuid: k}))
      newAnswer = {
        answers_list: answerList
      }
    } else {
      if (this.state.selected.includes(selectedUuid)) {
        // deselect
        this.setState({selected: []})
      } else {
        // select
        this.setState({selected: [selectedUuid]})
      }

      // change answer
      newAnswer = {
        answer: {
          uuid: selectedUuid
        }
      }
    }

    this.props.changeAnswer(newAnswer)
  }

  componentDidUpdate(prevProps) {
    // when user clicks submit, update correct/incorrect
    if (prevProps.wasCorrect == null) {
      if (this.props.wasCorrect) {
        this.setState({
          correct: this.state.selected
        })
      } else if (this.props.wasCorrect === false) {
        let correctAnswer
        if (this.props.multiSelect) {
          correctAnswer = this.props.correctAnswer.map(item => item.uuid)
        } else {
          correctAnswer = [this.props.correctAnswer.uuid]
        }
        this.setState({
          incorrect: this.state.selected,
          correct: correctAnswer
        })
      }
    }
  }

  toggleHint() {
    this.setState({hintVisible: !this.state.hintVisible})
  }

  render() {
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
          choices={this.props.question.choices}
          onPress={this.onChange.bind(this)}
          wasCorrect={this.props.wasCorrect}
          correctAnswer={this.props.correctAnswer}
          selected={this.state.selected}
          correct={this.state.correct}
          incorrect={this.state.incorrect}></ChoiceGroup>
      </View>
    )
  }
}

MultipleChoiceQuestion.defaultProps = {
  multiSelect: false
}

export default MultipleChoiceQuestion