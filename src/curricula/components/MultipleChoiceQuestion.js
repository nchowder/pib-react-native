import React from 'react';
import {View, Text, Image} from 'react-native'
import {ButtonGroup, Button} from 'react-native-elements'

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
    
    submit() {
        // console.log(this.props.qusestion.choices[this.state.selectedChoice])
        
        this.props.submit(this.props.question.uuid, 
            this.props.question.choices[this.state.selectedChoice].uuid)
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
                <Button title="Submit" onPress={this.submit.bind(this)}></Button>
            </View>
        )
    }

}

export default MultipleChoiceQuestion
