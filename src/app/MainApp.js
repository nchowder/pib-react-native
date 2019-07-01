
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { createStackNavigator, createAppContainer } from 'react-navigation'
import CurriculumScreen from '../curricula/CurriculumScreen'

const AppNavigator = createStackNavigator({
    Home: CurriculumScreen
})

export default createAppContainer(AppNavigator)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});