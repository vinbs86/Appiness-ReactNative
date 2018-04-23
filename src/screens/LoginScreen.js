
import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Alert
} from 'react-native';
import Button from '../components/Button';
import WhiteButton from '../components/WhiteButton';
import MyTextInput from '../components/MyTextInput';
import Header from '../components/Header'
import {Actions} from 'react-native-router-flux';

export default class LoginScreen extends Component {



  render() {
    return (
      <ScrollView style={styles.scrollviewstyle}>

      <Header/>
      <View style={styles.container}>

      <View style={styles.cardcontainer}>
      <View style={styles.cardview}>

      <Text style={styles.smalltextstyle}>Appiness Email ID</Text>

      <MyTextInput
      placeholder='adhish@appinessworld.com'
      autocorrection={false}
      autocapitalization='none'
      keyboardType='email-address'/>

      <View style={styles.horizontalline}/>

      <Text style={styles.smalltextstyle}>Password</Text>
      <MyTextInput
      autocorrection={false}
      autocapitalization='none'
      ispassword={true}/>

      </View>

      <Button onPress={this.doLogin.bind(this)}>Login</Button>
      <WhiteButton onPress={this.joinAppiness.bind(this)}>Join Appiness</WhiteButton>

      </View>
      <Text style={styles.textstyle}>Version 1.0</Text>

      </View>

      </ScrollView>
    );
  }

  doLogin(event) {
    Actions.homescreen();
  }

  joinAppiness(event) {
    Linking.openURL('https://www.appinessworld.com/careers.php').catch(err => console.error('An error occurred', err));
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:70,
    alignItems: 'center',
    backgroundColor: '#4cbbe9'
  },

  cardcontainer: {
    alignSelf: 'stretch',
    flex: 1,
    paddingTop:20,
    alignItems: 'center',
    backgroundColor: '#4cbbe9'
  },

  horizontalline: {
    flex: 1,
    height: 1,
    backgroundColor: '#BDBDBD'
  },

  cardview: {
    margin: 20,
    borderRadius:5,
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'grey',
    shadowOpacity: 1.0
  },

  textstyle: {
    color: '#FFFFFF',
    marginBottom: 25,
    marginTop: 70,
  },

  scrollviewstyle: {
    backgroundColor: '#4cbbe9'
  },

  smalltextstyle: {
    color: '#8E8E8E',
    marginTop: 15,
    marginLeft: 15,
    fontSize: 12
  }

});
