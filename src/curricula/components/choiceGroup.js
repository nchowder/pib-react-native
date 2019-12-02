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
    // console.log(this.props.choices)
    return (
      <View>
        {this.props.choices.map((choice, index) => 
          <TouchableOpacity 
            key={index}
            style={this.props.selectedIndex == index? [styles.choice, styles.selectedChoice] : [styles.choice]}
            onPress={() => this.props.onPress(index)}>
            {choice}
          </TouchableOpacity>)}
      </View>
    )
  }
}

choiceGroup.propTypes = {
  onPress: PropTypes.func,
  selectedIndex: PropTypes.number,
  choices: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default choiceGroup