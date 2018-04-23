
import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Alert
} from 'react-native';
import BottomBar from '../components/BottomBar'
import HeaderInner from '../components/HeaderInner'

export default class HomeScreenContainer extends Component {

  render() {
    return (

<View style={styles.container}>
<HeaderInner/>

<BottomBar/>
</View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#4cbbe9'
  }

});
