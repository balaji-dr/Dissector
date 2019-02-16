import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, ScrollView, FlatList, TextInput, AsyncStorage} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Right, Button } from 'native-base';

class Login extends Component {

    constructor(props) {
        super(props);
        this.changeText = this.changeText.bind(this);
        this.changePass = this.changePass.bind(this);
        this.state = {
            username: "",
            password: "",
        };
    }

    changeText(text){
        this.setState({username: text});
    }
    changePass(text){
        this.setState({password: text});
    }
    login(){
        AsyncStorage.setItem("access_token", "test");
        this.props.navigation.navigate("SignedIn")
    }


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{fontSize: 30, marginBottom: 30 }}>Dissector</Text>
                    <Text style={{fontSize: 15, }}>Username</Text>
                    <TextInput value={this.state.username} onChangeText={this.changeText}/>
                    <Text>Password</Text>
                    <TextInput value={this.state.password} secureTextEntry={true} onChangeText={this.changePass}/>

                <View style={{}}>
                    <Button rounded style={{ width: 250,
                        alignSelf: "center",
                        alignItems: "center",
                        justifyContent: 'center',
                        marginBottom: 20,
                        marginTop: 10,

                    }} dark onPress={() => this.login()}>
                        <Text style={{color: 'white'}}>Login</Text>
                    </Button>

                    <Button rounded style={{ width: 250,
                        alignSelf: "center",
                        alignItems: "center",
                        justifyContent: 'center',
                        marginBottom: 20,
                        marginTop: 10
                    }} dark onPress={() => this.register()}>
                        <Text style={{alignSelf: "center", color: 'white'}}>Register</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

export default Login;

