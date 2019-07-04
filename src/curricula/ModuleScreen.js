import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import {View, Text, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import {TileSheet} from './CurriculumScreen'
import * as actionCreators from './CurriculumActions'

class ModuleScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('title')
    })

    componentDidMount() {
        this.props.loadModuleInfo(this.props.navigation.getParam('uuid'))
    }

    render() {
        return <View style={{flex: 1}}>
            <Spinner
                visible={this.props.loading}
                textContent={'Loading...'}
            />      
            <ScrollView visible={!this.props.loading} style={{flex: 1, padding: 5}}>
                <TileSheet tiles={this.props.moduleInfo.lessons}></TileSheet>
            </ScrollView>
        </View>
    }
}


// container:
const mapStateToProps = (state) => state.curriculum
export default connect (mapStateToProps, actionCreators)(ModuleScreen)