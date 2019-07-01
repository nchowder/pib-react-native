import React from 'react'
import {connect} from 'react-redux'
import * as actionCreators from './CurriculumActions'
import {View, TouchableOpacity, Image, ScrollView} from 'react-native'
import { Container, Header, Content, Card, CardItem, Text} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay'
import styles from './CurriculumStyles'

function Tile(props) {
    return (
          <View style={{width: 100, height: 100, flex: 1}}>
              <Text>{props.tileName}</Text>
              <Image source={{uri: props.tileImage}} style={{height: 200, flex: 1}}/>
          </View>
    )
}

function TileSheet(props) {
    // "Sheet" of image tiles (module/lesson)
    // Name is a unit/module
    return (
        <View style={styles.tileSheet}>
            <Text style={{flexDirection: 'row', flex: 1}}>{props.tileSheetName}</Text>
            {props.tiles.map((tile) => 
                <Tile  key={tile.uuid} tileName={tile.name} tileImage={tile.image}></Tile>    
            )}   
        </View>
    )
}

// component
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
            <ScrollView visible={!this.props.loading}>
                {/* <Text>{this.props.curriculumInfo.author.display_name}</Text> */}
                {this.props.curriculumInfo.units.map((unit) => 
                    <TileSheet key={unit.uuid} tileSheetName={unit.name} tiles={unit.modules}></TileSheet>
                )}
            </ScrollView>
        </View>
    }
}

// container:
const mapStateToProps = (state) => state.curriculum
export default connect (mapStateToProps, actionCreators)(CurriculumScreen)