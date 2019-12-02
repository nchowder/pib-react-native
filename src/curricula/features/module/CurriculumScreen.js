import React from 'react'
import {connect} from 'react-redux'
import {View, TouchableOpacity, Image, ScrollView} from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body} from 'native-base'
import Spinner from 'react-native-loading-spinner-overlay'
import styles from './CurriculumStyles'

import { fetchCurriculumInfo } from './moduleSlice'

const mapDispatch = { fetchCurriculumInfo }

class Tile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.navigateTo}>
        <Card style={{width: 150}}>
          <CardItem header>
            <Text>
              {this.props.tileName}
            </Text>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri: this.props.tileImage}} 
              style={{width: 100, height: 100, flex: 1, marginBottom: 10, resizeMode: 'contain'}}/>
          </CardItem>
        </Card>
      </TouchableOpacity>
    )
  }
  //   <View style={{width: 100, height: 200, flex: 1, margin: 20, borderColor: 'black'}}>
  //       <Text>{props.tileName}</Text>
  //       <Image source={{uri: props.tileImage}} style={{height: 100, flex: 1}}/>
  //   </View>
}

export function TileSheet(props) {
  // "Sheet" of image tiles (module/lesson)
  // Name is a unit/module
  return (
    <View>
      {props.tileSheetName? 
        <Text style={{fontSize: 20, marginVertical: 10}}>{props.tileSheetName}</Text> : null}
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        {props.tiles.map((tile) => 
          <Tile navigateTo={() => {props.navigateTo(tile.uuid, tile.name)}} key={tile.uuid} tileName={tile.name} tileImage={tile.image}></Tile>    
        )}   
      </View>
    </View>
  )
}

// component
class CurriculumScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions() {
    return {title: 'Home'}
  }
 
  componentDidMount() {
    this.props.fetchCurriculumInfo('default')
  }

  navigateToModule(moduleUuid, moduleTitle) {
    this.props.navigation.navigate('Module', {
      uuid: moduleUuid,
      title: moduleTitle
    })
  }

  render() {
    return <View style={{flex: 1}}>
      <Spinner
        visible={this.props.loading}
        textContent={'Loading...'}
      />      
      <ScrollView visible={!this.props.loading} style={{flex: 1, padding: 5}}>
        {/* <Text>{this.props.curriculumInfo.author.display_name}</Text> */}
        {this.props.curriculumInfo.units.map((unit) => 
          <TileSheet navigateTo={this.navigateToModule.bind(this)} key={unit.uuid} tileSheetName={unit.name} tiles={unit.modules}></TileSheet>
        )}
      </ScrollView>
    </View>
  }
}

// container:
const mapStateToProps = (state) => state.curriculum.module
export default connect (mapStateToProps, mapDispatch)(CurriculumScreen)