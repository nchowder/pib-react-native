import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import {View, Text, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import {TileSheet} from '../module/CurriculumScreen'
import {Button} from 'react-native-elements'
import MultipleChoiceQuestion from './MultipleChoiceQuestion'
import ProgressBar from 'react-native-progress/Bar';
import styles from './lessonStyles'
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
        // if we're not done, continue
        if (this.props.status.score != this.props.response.required_score) {
            this.props.fetchNextQuestion()
        }
    }

    finish() {
        // finish the lesson
        this.props.navigation.goBack(null)
    }

    changeAnswer(newAnswer) {
        this.props.setCurrentAnswer(newAnswer)
    }

    render() {
        // screen for finished
        if (this.props.status.score == this.props.response.required_score) {
            return <View style={styles.finishedScreen}>
                <View style={styles.centeredDisplay}>
                    <Text style={styles.finishedScreenText}>
                        You rock! Lesson Complete!
                    </Text>
                    <Button onPress={this.finish.bind(this)} title={'Go to next level'}></Button>
                </View>
            </View>
        }

        // display the next question
        return <View style={styles.lessonScreen}>
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

            {this.props.response.was_correct == true && 
            <View>
                <Text>Correct</Text>
            </View>}

            {this.props.response.was_correct == false && 
            <View>
                <Text>Incorrect</Text>
            </View>}

            <Button title={this.props.response.was_correct == null ? "Check" : "Continue"} 
                onPress={this.props.response.was_correct == null ? 
                    this.submit.bind(this) : this.continue.bind(this)}>
            </Button>
            <View style={styles.progressBarContainer}>
                <ProgressBar width={null} progress={this.props.status.score/this.props.response.required_score}></ProgressBar>
            </View>
        </View>
    }
}


// container:
const mapStateToProps = (state) => state.curriculum.lesson
export default connect (mapStateToProps, mapDispatch)(LessonScreen)