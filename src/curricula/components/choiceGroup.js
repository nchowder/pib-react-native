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
    const multiSelect = Array.isArray(this.props.selectedIndex)
    
    return (
      <View>
        {this.props.choices.map((choice, index) => 
          <TouchableOpacity 
            key={index}
            style={((multiSelect && this.props.selectedIndex[index]) || (!multiSelect && this.props.selectedIndex == index))? 
              [styles.choice, styles.selectedChoice] : [styles.choice]}
            // Pressing is handled by parent component
            onPress={() => this.props.onPress(index)}> 
            {choice}
          </TouchableOpacity>)}
      </View>
    )
  }
}

choiceGroup.propTypes = {
  onPress: PropTypes.func,
  selectedIndex: PropTypes.any,  // number or array of booleanss
  choices: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default choiceGroup