import React from "react";
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {AppTabNavigator} from "../navigation/navigators"
import Login from "../screens/Login";

export const LoginSwitch = (signedIn = false) => createAppContainer(createSwitchNavigator({
        SignedIn: {
            screen: createAppContainer(AppTabNavigator),
        },
        SignedOut: {
            screen: Login
        }
    },
    {
        initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
    })
);
