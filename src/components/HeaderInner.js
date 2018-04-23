import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View
} from 'react-native';

export default class HeaderInner extends Component{
  render() {
    return (
      <View style={styles.horizontalcontainer}>
      <Image source={require('../images/appiness-logo.png')}/>
      <View style={styles.notistyle}>
      <Image source={require('../images/notification.png')}/>
      </View>
      </View>
    );
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
