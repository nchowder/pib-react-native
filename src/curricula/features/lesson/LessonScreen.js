import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import {View, Text, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import {TileSheet} from '../module/CurriculumScreen'
import {Button} from 'react-native-elements'
import MultipleChoiceQuestion from './MultipleChoiceQuestion'

import { fetchNextQuestion, fetchResponse, setCurrentAnswer, setLessonUuid } from './lessonSlice'

const mapDispatch = { fetchNextQuestion, fetchResponse, setCurrentAnswer, setLessonUuid }

class LessonScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('title')
    })

    componentDidMount() {
        this.props.setLessonUuid(this.props.navigation.getParam('uuid'))
        this.props.fetchNextQuestion()
    }

    submit() {
        this.props.fetchResponse(this.props.questionInfo.uuid, this.props.currentAnswer)
    }

    continue() {
        this.props.fetchNextQuestion()
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
            <View visible={!this.props.loading}>
                <MultipleChoiceQuestion 
                key={this.props.questionInfo.uuid}
                question={this.props.questionInfo} 
                submit={this.submit.bind(this)}
                changeAnswer={this.changeAnswer.bind(this)}></MultipleChoiceQuestion>
            </View>
            <Button title={this.props.response.was_correct == null ? "Check" : "Continue"} 
                onPress={this.props.response.was_correct == null ? 
                    this.submit.bind(this) : this.continue.bind(this)}>
            </Button>
        </View>
    }
}


// container:
const mapStateToProps = (state) => state.curriculum.lesson
export default connect (mapStateToProps, mapDispatch)(LessonScreen)