import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  View
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class HeaderInner extends Component{


  render() {
    return (
      <View style={styles.horizontalcontainer}>
      <Image source={require('../images/appiness-logo.png')}/>
      <View style={styles.notistyle}>

      <TouchableHighlight underlayColor={'#4cbbe9'} onPress={this.goToNotification.bind(this)}>
      <Image source={require('../images/notification.png')}/>
      </TouchableHighlight>

      </View>
      </View>
    );
  }

  goToNotification(event) {
    Actions.notificationlist();
  }


}

const styles = StyleSheet.create({


  horizontalcontainer: {
    flexDirection: 'row',
    paddingTop:50,
    paddingLeft: 30,
    backgroundColor: '#4cbbe9'
  },

  notistyle: {
    flex:1,
    backgroundColor: '#4cbbe9',
    alignItems: 'flex-end',
    paddingRight:20
  }

});
