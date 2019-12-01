import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import {View, Text, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import {TileSheet} from './CurriculumScreen'
import * as actionCreators from './CurriculumActions'
import MultipleChoiceQuestion from './components/MultipleChoiceQuestion';

class LessonScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('title')
    })

    componentDidMount() {
        this.props.loadNextQuestion(this.props.navigation.getParam('uuid'))
    }

    submit(questionUuid, choiceUuid) {
        this.props.submitResponse(questionUuid, {
            'answer': {
                'uuid': choiceUuid
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
                <MultipleChoiceQuestion question={this.props.questionInfo} submit={this.submit.bind(this)}></MultipleChoiceQuestion>
            </ScrollView>
        </View>
    }
}


// container:
const mapStateToProps = (state) => state.curriculum
export default connect (mapStateToProps, actionCreators)(LessonScreen)