import React from 'react';
import {View, Text, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MyProfile from '../tabs/MyProfile';
import MyDevices from '../tabs/MyDevices';
import MyDashboard from '../tabs/MyDashboard';
import MyMates from '../tabs/MyMates';
import Settings from '../tabs/Settings';

class BottomBar extends React.Component {
  state = {
    profile: false,
    mydevices: false,
    dashboard: true,
    mymates: false,
    settings: false,
  };

  render() {

    return (
      <View style={styles.container}>

        {

          this.state.profile ? <MyProfile/> :
          this.state.mydevices ? <MyDevices/> :
          this.state.dashboard ? <MyDashboard/> :
          this.state.mymates ? <MyMates/> :
          this.state.settings ? <Settings/> : null
      }


        <View style={{width: '100%', height: 52, position: 'absolute', bottom: 0, justifyContent: 'space-between', flexDirection: 'row'}}>
          <TouchableHighlight underlayColor={'#D6D6D6'} style={styles.touchablestyle} onPress={() => this.setState({ profile: true, mydevices: false, dashboard: false, mymates: false, settings: false})}>
          <View>
            <Image style={styles.imagestyle} source={require('../images/profiledisabled.png')}/>
            <Text style={styles.smalltextstyle}>Profile</Text>
          </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={'#D6D6D6'} style={styles.touchablestyle} onPress={() => this.setState({ profile: false, mydevices: true, dashboard: false, mymates: false, settings: false})}>
          <View>
            <Image style={styles.imagestyle} source={require('../images/mydevicedisabled.png')}/>
            <Text style={styles.smalltextstyle}>My Devices</Text>
          </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={'#D6D6D6'} style={styles.touchablestyle} onPress={() => this.setState({ profile: false, mydevices: false, dashboard: true, mymates: false, settings: false})}>
          <View>
            <Image style={styles.dashimagestyle} source={require('../images/dashboardenabled.png')}/>
            <Text style={styles.dashsmalltextstyle}>Dashboard</Text>
          </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor={'#D6D6D6'} style={styles.touchablestyle} onPress={() => this.setState({ profile: false, mydevices: false, dashboard: false, mymates: true, settings: false})}>
          <View>
            <Image style={styles.imagestyle} source={require('../images/mymatesdisabled.png')}/>
            <Text style={styles.smalltextstyle}>Appy Peeps</Text>
          </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={'#D6D6D6'} style={styles.touchablestyle} onPress={() => this.setState({ profile: false, mydevices: false, dashboard: false, mymates: false, settings: true})}>
          <View>
            <Image style={styles.imagestyle} source={require('../images/settingsdisabled.png')}/>
            <Text style={styles.smalltextstyle}>Settings</Text>
          </View>
          </TouchableHighlight>

        </View>
      </View>
    );
  }
}

export default BottomBar;

const styles = {
  touchablestyle:
  {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },

  imagestyle:
  {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 20,
    height: 20,
    margin: 5
  },

  dashimagestyle:
  {
    width: 70,
    height: 70
  },


  container:
  {
    flex: 1,
    alignSelf: 'stretch'
  },

  smalltextstyle: {
    color: '#8E8E8E',
    fontSize: 10,
    textAlign: 'center',
    width: '100%'
  },

  dashsmalltextstyle: {
    color: '#8E8E8E',
    fontSize: 10,
    textAlign: 'center',
    width: '100%',
    marginBottom: 35,
    marginLeft: 8,
    marginRight: 8
  }

};
