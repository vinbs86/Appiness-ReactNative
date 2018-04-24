import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  View
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class NotificationHeader extends Component{


  render() {
    return (
      <View style={styles.horizontalcontainer}>

      <View style={styles.notistyle}>

      <TouchableHighlight underlayColor={'#4cbbe9'} onPress={this.goToNotification.bind(this)}>
      <Image source={require('../images/back.png')}/>
      </TouchableHighlight>

      </View>


      <Image source={require('../images/appiness-logo.png')}/>

      </View>
    );
  }

  goToNotification(event) {
    Actions.popTo('homescreen');
  }


}

const styles = StyleSheet.create({


  horizontalcontainer: {
    flexDirection: 'row',
    paddingTop:50,
    paddingRight: 30,
    backgroundColor: '#4cbbe9'
  },

  notistyle: {
    backgroundColor: '#4cbbe9',
    alignItems: 'flex-start',
    paddingLeft:20,
    paddingRight:15,
    paddingTop:17
  }

});
