import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View
} from 'react-native';

export default class Header extends Component{
  render() {
    return (
      <View style={styles.horizontalcontainer}>
      <Image source={require('../images/appiness-logo.png')}/>
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
  }

});
