import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, ScrollView, FlatList} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Right, Button } from 'native-base';
import Ionicons from "react-native-vector-icons/Ionicons";
import TimerCountdown from "react-native-timer-countdown";
import { material } from 'react-native-typography'

class IrrigationScheduling extends Component {


    static navigationOptions = ({ navigation  }) => ({
            title: "Irrigation Scheduling",
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'black'
            },
            headerMode: 'float',
            tabBarVisible: false
        }
    );


    render() {
        return (
            <ScrollView style={{backgroundColor: "#EEF2F5"}}

                // refreshControl={
                //     <RefreshControl
                //         refreshing={this.state.refreshing}
                //         onRefresh={this._onRefresh}
                //     />
                // }
            >
                <Content padder>
                    <TimerCountdown
                        initialSecondsRemaining={9000 * 60}
                        onTick={secondsRemaining => console.log("tick", secondsRemaining)}
                        onTimeElapsed={() => console.log("complete")}
                        allowFontScaling={true}
                        style={[ {fontSize: 90, alignSelf: 'center', marginTop: 100 }, material.display4]}
                    />
                </Content>
            </ScrollView>

        );
    }
}

export default IrrigationScheduling;

