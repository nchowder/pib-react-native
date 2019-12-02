import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import {View, Text, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import {TileSheet} from '../module/CurriculumScreen'
import {Button} from 'react-native-elements'
import MultipleChoiceQuestion from './MultipleChoiceQuestion'

import { fetchNextQuestion, fetchResponse, setCurrentAnswer } from './lessonSlice'

const mapDispatch = { fetchNextQuestion, fetchResponse, setCurrentAnswer }

class LessonScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('title')
    })

    componentDidMount() {
        console.log('hello')
        this.props.fetchNextQuestion(this.props.navigation.getParam('uuid'))
    }

    submit() {
        this.props.fetchResponse(this.props.questionInfo.uuid, this.props.currentAnswer)
    }

    changeAnswer(newAnswer) {
        this.props.setCurrentAnswer(newAnswer)
    }

    render() {
        return <View style={{flex: 1}}>
            <Spinner
                visible={this.props.loading}
                textContent={'Loading...'}
            />
            <ScrollView visible={!this.props.loading}>
                <MultipleChoiceQuestion 
                question={this.props.questionInfo} 
                submit={this.submit.bind(this)}
                changeAnswer={this.changeAnswer.bind(this)}></MultipleChoiceQuestion>
            </ScrollView>
            <Button title="Submit" onPress={this.submit.bind(this)}></Button>
        </View>
    }
}


// container:
const mapStateToProps = (state) => state.curriculum.lesson
export default connect (mapStateToProps, mapDispatch)(LessonScreen)