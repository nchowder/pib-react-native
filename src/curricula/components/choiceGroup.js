import React from 'react'
import PropTypes from 'prop-types'
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  selectedChoice: {
    backgroundColor: 'lightblue'
  },
  choice: {
    backgroundColor: 'lightgray',
    marginVertical: 3,
    padding: 5,
    borderRadius: 5
  },
  incorrectChoice: {
    borderColor: 'red',
    borderWidth: 1
  },
  correctChoice: {
    borderColor: 'green',
    borderWidth: 2
  }
})

class choiceGroup extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    /**
     * Format of selectedIndex:
     * {
     *  selected: [uuids...]
     *  correct: [uuids...] | null
     *  incorrect: [uuids...] | null
     * }
     */
    
    const selected = this.props.selected
    const incorrect = this.props.incorrect
    const correct = this.props.correct
    
    // console.log(correct.includes(this.props.choices[0].uuid))
    return (
      <View>
        {this.props.choices.map((choice) => 
          <TouchableOpacity 
            key={choice.uuid}
            style={[
              styles.choice, 
              selected.includes(choice.uuid) && styles.selectedChoice,
              incorrect.includes(choice.uuid) && styles.incorrectChoice,
              correct.includes(choice.uuid) && styles.correctChoice]}
            // Pressing is handled by parent component
            onPress={() => this.props.onPress(choice.uuid)}>
            {<View><Text>{choice.content.text}</Text></View>}
          </TouchableOpacity>)}
      </View>
    )
  }
}

choiceGroup.propTypes = {
  onPress: PropTypes.func,
  selected: PropTypes.array,
  correct: PropTypes.array,
  incorrect: PropTypes.array,
  choices: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default choiceGroup