import React from 'react'
import {connect} from 'react-redux'
import * as actionCreators from './CurriculumActions'
import {View, TouchableOpacity, Image, ScrollView} from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body} from 'native-base'
import Spinner from 'react-native-loading-spinner-overlay'
import styles from './CurriculumStyles'

class Tile extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
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
		</Card>)
	}
	//   <View style={{width: 100, height: 200, flex: 1, margin: 20, borderColor: 'black'}}>
	//       <Text>{props.tileName}</Text>
	//       <Image source={{uri: props.tileImage}} style={{height: 100, flex: 1}}/>
	//   </View>
}

function TileSheet(props) {
	// "Sheet" of image tiles (module/lesson)
	// Name is a unit/module
	return (
		<View>
			<Text style={{fontSize: 20, marginVertical: 10}}>{props.tileSheetName}</Text>
			<View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
				{props.tiles.map((tile) => 
					<Tile key={tile.uuid} tileName={tile.name} tileImage={tile.image}></Tile>    
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
		this.props.loadCurriculumInfo('default')
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
					<TileSheet key={unit.uuid} tileSheetName={unit.name} tiles={unit.modules}></TileSheet>
				)}
			</ScrollView>
		</View>
	}
}

// container:
const mapStateToProps = (state) => state.curriculum
export default connect (mapStateToProps, actionCreators)(CurriculumScreen)