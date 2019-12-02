import React from 'react'

class MultipleChoiceQuestion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedChoice: null
    }
  }

  updateChoice(selectedIndex) {
    console.log(selectedIndex)
    this.setState({selectedChoice: selectedIndex})
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
          onPress={this.updateChoice.bind(this)}
          buttons={buttons}
          selectedIndex={this.state.selectedChoice}
        ></ButtonGroup>
      </View>
    )
  }

}

export default MultipleChoiceQuestion
