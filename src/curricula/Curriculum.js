import React from 'react'
import {connect} from 'react-redux'
import * as actionCreators from './CurriculumActions'
import {Text, View} from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

class CurriculumScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        title: 'Home',
    }
 
    componentDidMount() {
        this.props.loadCurriculumInfo('default')
    }

    render() {
        return <View>
            <Spinner
            visible={this.props.loading}
            textContent={'Loading...'}
            />      
            <View visible={!this.props.loading}>
                {/* <Text>{this.props.curriculumInfo.author.display_name}</Text> */}
                {this.props.curriculumInfo.units.map((unit) => 
                    <View>
                        <Text key={unit.uuid}>{unit.name}</Text>
                        {unit.modules.map((module) => 
                            <Text key={module.uuid}>{module.name}</Text>    
                        )}
                    </View>
                )}
            </View>
        </View>
    }
}

const mapStateToProps = (state) => state.curriculum

export default connect (mapStateToProps, actionCreators)(CurriculumScreen)