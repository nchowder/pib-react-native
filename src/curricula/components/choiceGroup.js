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
    
    return (
      <View>
        {this.props.choices.map((choice) => 
          <TouchableOpacity 
            key={choice.uuid}
            style={(selected.includes(choice.uuid))? 
              [styles.choice, styles.selectedChoice] : [styles.choice]}
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