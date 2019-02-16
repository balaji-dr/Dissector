import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {LoginSwitch} from "./src/navigation/switch";
import {isSignedIn} from "./src/function/util"


type Props = {};
export default class App extends Component<Props> {

    state = {
        signedIn: false,
        checkedSignIn: false,
        loading: false,
    };

    componentWillMount(){
        isSignedIn()
            .then(response => this.setState({ signedIn: response, checkedSignIn: true }))
            .catch(error => alert("Oops! Something broked"));

    }

  render() {
      const { checkedSignIn, signedIn } = this.state;
      const Layout = LoginSwitch(signedIn);
      if(checkedSignIn){
          return(
              <Layout />
          );
      }else{
          return null;
      }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
