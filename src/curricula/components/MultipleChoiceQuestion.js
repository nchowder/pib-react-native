import React from 'react';
import {View, Text, Image} from 'react-native'

class MultipleChoiceQuestion extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text>{this.props.question.text}</Text>
                {this.props.question.choices.map((choice) => {
                    return <View key={choice.uuid}>
                        {/* <Text>{choice.content.text}</Text> */}
                        <Image 
                        // style={{width: 100, height: 100, resizeMode: 'contain'}}
                         source={{uri: choice.content.image}}></Image>
                    </View>
                })}
            </View>
        )
    }

}

export default MultipleChoiceQuestion
