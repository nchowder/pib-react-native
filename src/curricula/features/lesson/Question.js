import React from 'react'
import {connect} from 'react-redux'
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import {Image, ButtonGroup} from 'react-native-elements'
import styles from './lessonStyles'
import ChoiceGroup from '../../components/choiceGroup'
import MultipleChoiceQuestion from './MultipleChoiceQuestion'
import VectorQuestion from './VectorQuestion'

class Question extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const questionType = this.props.question.answer_type

    if (questionType == 'MULTIPLE_CHOICE') {
      return (
        <MultipleChoiceQuestion
          question={this.props.question}
          correctAnswer={this.props.correctAnswer}
          wasCorrect={this.props.wasCorrect}
          changeAnswer={this.props.changeAnswer.bind(this)}
        ></MultipleChoiceQuestion>
      )
    } else if (questionType == 'MULTISELECT_CHOICE') {
      return (
        <MultipleChoiceQuestion
          question={this.props.question}
          correctAnswer={this.props.correctAnswer}
          wasCorrect={this.props.wasCorrect}
          changeAnswer={this.props.changeAnswer.bind(this)}
          multiSelect={true}
        ></MultipleChoiceQuestion>
      )
    // } else if (questionType == 'VECTOR') {
    //   return (
    //     <VectorQuestion
    //       question={this.props.question}
    //       changeAnswer={this.props.changeAnswer.bind(this)}
    //     ></VectorQuestion>
    //   )
    } else if (questionType == null) {
      return (
        <Text>Loading question information...</Text>
      )
    }{
      return (
        <Text>Sorry, this question type is not yet supported.</Text>
      )
    }

  }
}

export default Question