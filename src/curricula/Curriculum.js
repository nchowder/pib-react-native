import React from 'react'
import {connect} from 'react-redux'
import * as actionCreators from './CurriculumActions'
import {Text, View} from 'react-native'

class Curriculum extends React.Component {
    constructor(props) {
        super(props)
    }
 
    componentDidMount() {
        this.props.loadCurriculumInfo('default')
    }

    render() {
        console.log(this.props)

        if (this.props.loading) {
            return <View>
                <Text> Loading </Text>
            </View>
        } else {
            return <View>
            <Text>{this.props.curriculumInfo.author.display_name}</Text>
            </View>
        }

    }
}

const mapStateToProps = (state) => state.curriculum

export default connect (mapStateToProps, actionCreators)(Curriculum)