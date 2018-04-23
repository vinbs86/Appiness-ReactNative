
import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';

export default class MyMates extends Component {



  render() {
    return (
      <ScrollView style={styles.scrollviewstyle}>

      <View style={styles.container}>

      <View style={styles.cardcontainer}>
      <View style={styles.cardview}>

      <Text style={styles.textstyle}>My Mates</Text>

      </View>


      </View>

      </View>

      </ScrollView>
    );
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
    color: '#000000',
    margin: 70
  },

  scrollviewstyle: {
    backgroundColor: '#4cbbe9'
  }

});
