
import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Alert
} from 'react-native';

import NotificationHeader from '../components/NotificationHeader'

export default class NotificationList extends Component {

  render() {
    return (

<View style={styles.container}>
<NotificationHeader/>


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
