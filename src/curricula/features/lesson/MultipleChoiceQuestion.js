import React from 'react'
import {connect} from 'react-redux'
import {View, Text, ScrollView} from 'react-native'
import {Image, ButtonGroup} from 'react-native-elements'

class MultipleChoiceQuestion extends React.Component {
  constructor(props) {
    super(props)
  }

  onChange(selectedIndex) {
    const newAnswer = {
      answer: {
        uuid: this.props.question.choices[selectedIndex]['uuid']
      }
    }
    this.props.changeAnswer(newAnswer)
  }

  render() {
    const buttons = this.props.question.choices.map((choice) => {
      return ({element: () => <View key={choice.uuid}>
        <Text>{choice.content.text}</Text>
        {choice.content.image? <Image 
          style={{width: 100, height: 100, resizeMode: 'contain'}}
          source={{uri: choice.content.image}}></Image>:null}
      </View>})
    })

    return (
      <View>
        <Text>{this.props.question.text}</Text>
        {this.props.question.image? <Image 
          style={{width: 100, height: 100, resizeMode: 'contain'}}
          source={{uri: this.props.question.image}}></Image>:null}
        <ButtonGroup
          onPress={this.onChange.bind(this)}
          buttons={buttons}
          // selectedIndex={this.state.selectedChoice}
        ></ButtonGroup>
      </View>
    )
  }
}

export default MultipleChoiceQuestion