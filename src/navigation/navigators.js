import React from "react";
import {Platform, StyleSheet, Text, View} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from "react-navigation";
import IrrigationScheduling from "../screens/IrrigationScheduling";
import DiseaseDetection from "../screens/DiseaseDetection";



const DiseaseStack = createStackNavigator({
    Home: DiseaseDetection
},{
    initialRouteName: "Home",
    headerMode: 'float'
});

const IrrigationStack = createStackNavigator({
    Home: IrrigationScheduling
},{
    initialRouteName: "Home",
    headerMode: 'float'
});

export const DiseaseStackNavigator = createAppContainer(DiseaseStack);
export const IrrigationStackNavigator = createAppContainer(IrrigationStack);

export const AppTabNavigator = createBottomTabNavigator({
        Disease: {
            screen: DiseaseStackNavigator,
            navigationOptions: {
                tabBarLabel: 'Disease Detection',
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="md-bug" size={30} color={tintColor}/>
                )
            }
        },
        Irrigation: {
            screen: IrrigationStack,
            navigationOptions: {
                tabBarLabel: 'Irrigation Scheduling',
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="md-water" size={30} color={tintColor}/>
                )
            }
        }
    },
    {   initialRouteName:"Disease",
        swipeEnabled: true,
        animationEnabled: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: '#A7B6B9',
            showLabel: true,
            labelStyle: {
                fontSize: 12,
                marginTop: 0
            },
            style: {
                backgroundColor: '#EEF2F5',
            },
        },
    }
);


