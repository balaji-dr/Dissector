import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, ScrollView, FlatList, Dimensions, Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Right, Button } from 'native-base';
import Ionicons from "react-native-vector-icons/Ionicons";
import { human } from 'react-native-typography'
import MapView,{ PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

let window = Dimensions.get('window');

class DiseaseDetection extends Component {

    static navigationOptions = ({ navigation  }) => ({
            title: "Disease Detection",
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
                    <Card style={{
                        marginLeft:10,
                        width: window.width/1.130,
                        height: "auto",
                        borderRadius:10,
                        borderWidth: 1,
                        overflow: 'hidden',
                        backgroundColor: "transparent"
                    }}>
                        <CardItem style={{backgroundColor: "#C92627"}}>
                            <Body>
                            <Text style={[{ fontSize: 20,
                                color: "white",
                                fontWeight: "500"}, human.title2White]}>
                                Alert
                            </Text>
                            <Text style={{color: "white", fontSize: 20}}>
                                Your crops are affected at two areas.
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card style={{
                        marginLeft:10,
                        width: window.width/1.130,
                        height: 300,
                        borderRadius:10,
                        borderWidth: 1,
                        overflow: 'hidden',
                        backgroundColor: "transparent"
                    }} >
                        {/*<CardItem style={{backgroundColor: "#C92627", height: 300}}>*/}

                                <Image source={require("../assets/img.png")} style={{height: 300, width: window.width}}/>

                        {/*</CardItem>*/}

                    </Card>

                    <Card style={{
                        marginLeft:10,
                        width: window.width/1.130,
                        height: 300,
                        borderRadius:10,
                        borderWidth: 1,
                        overflow: 'hidden',
                        backgroundColor: "transparent"
                    }} >
                        <CardItem style={{backgroundColor: "white", height: 300}}>



                        </CardItem>

                    </Card>
                </Content>
            </ScrollView>

        );
    }
}

export default DiseaseDetection;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: window.height- (Header.HEIGHT + 73 ),
        width: window.width,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        height: window.height- (Header.HEIGHT + 73 ),
        width: window.width
    },

});
