import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import {View, Text, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import {TileSheet} from '../module/CurriculumScreen'
import {Button} from 'react-native-elements'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'

import { loadNextQuestion, submitResponse } from './lessonSlice'

const mapDispatch = { loadNextQuestion, submitResponse }

class LessonScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('title')
    })

    componentDidMount() {
        console.log('hello')
        loadNextQuestion(this.props.navigation.getParam('uuid'))
    }

    submit() {
        submitResponse(this.props.questionInfo.uuid, {
            'answer': {
                'uuid': this.props.questionInteraction.selected_choice
            }
        })
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
                submit={this.submit.bind(this)}></MultipleChoiceQuestion>
            </ScrollView>
            <Button title="Submit" onPress={this.submit.bind(this)}></Button>
        </View>
    }
}


// container:
const mapStateToProps = (state) => state.curriculum
export default connect (mapStateToProps, mapDispatch)(LessonScreen)