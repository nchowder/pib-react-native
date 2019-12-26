import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import {View, Text, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import {TileSheet} from './CurriculumScreen'
import { withNavigationFocus } from 'react-navigation'
import { fetchModuleInfo, resetModule } from './moduleSlice'

const mapDispatch = { fetchModuleInfo, resetModule}

class ModuleScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('title')
    })

    componentDidMount() {
        this.props.fetchModuleInfo(this.props.navigation.getParam('uuid'))
    }

    componentDidUpdate(previousProps) {
        if (!this.props.isFocused) {
            // if we are exiting this screen, then reset all the module information
            this.props.resetModule()
        } else if (this.props.isFocused != previousProps.isFocused) {
            // if we are entering this screen again, then fetch module info again
            this.props.fetchModuleInfo(this.props.navigation.getParam('uuid'))
        }
    }

    navigateToLesson(lessonUuid, lessonTitle) {
        this.props.navigation.navigate('Lesson', {
            uuid: lessonUuid,
            title: lessonTitle
        })
    }

    render() {
        return <View style={{flex: 1}}>
            <Spinner
                visible={this.props.loading}
                textContent={'Loading...'}
            />      
            <ScrollView visible={!this.props.loading} style={{flex: 1, padding: 5}}>
                <TileSheet navigateTo={this.navigateToLesson.bind(this)} tiles={this.props.moduleInfo.lessons}></TileSheet>
            </ScrollView>
        </View>
    }
}


// container:
const mapStateToProps = (state) => state.curriculum.module
export default connect (mapStateToProps, mapDispatch)(withNavigationFocus(ModuleScreen))