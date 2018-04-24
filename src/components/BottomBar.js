import React from 'react';
import {View, Text, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MyProfile from '../tabs/MyProfile';
import MyDevices from '../tabs/MyDevices';
import MyDashboard from '../tabs/MyDashboard';
import MyMates from '../tabs/MyMates';
import Settings from '../tabs/Settings';

const profileenabledImage = require('../images/profileenabled.png');
const profiledisabledImage = require('../images/profiledisabled.png');

const mydeviceenabledImage = require('../images/mydeviceenabled.png');
const mydevicedisabledImage = require('../images/mydevicedisabled.png');

const dashboardenabledImage = require('../images/dashboardenabled.png');
const dashboarddisabledImage = require('../images/dashboarddisabled.png');

const settingsenabledImage = require('../images/settingsenabled.png');
const settingsdisabledImage = require('../images/settingsdisabled.png');

const mymatesenabledImage = require('../images/mymatesenabled.png');
const mymatesdisabledImage = require('../images/mymatesdisabled.png');


class BottomBar extends React.Component {
  state = {
    profile: false,
    mydevices: false,
    dashboard: true,
    mymates: false,
    settings: false,
  };

  renderProfileImage(){
    var imgSource = this.state.profile? profileenabledImage : profiledisabledImage;
    var textStyle = this.state.profile? styles.smalltextselectstyle : styles.smalltextstyle;

    return (
      <View>
      <Image
        style={ styles.imagestyle }
        source={ imgSource }
      />

      <Text style={textStyle}>Profile</Text>
      </View>

    );
  }

  renderMyDeviceImage(){
    var imgSource = this.state.mydevices? mydeviceenabledImage : mydevicedisabledImage;
    var textStyle = this.state.mydevices? styles.smalltextselectstyle : styles.smalltextstyle;

    return (
      <View>
      <Image
        style={ styles.imagestyle }
        source={ imgSource }
      />

      <Text style={textStyle}>My Devices</Text>
      </View>
    );
  }


  renderDashboardImage(){
    var imgSource = this.state.dashboard? dashboardenabledImage : dashboarddisabledImage;
    var textStyle = this.state.dashboard? styles.dashsmalltextselectstyle : styles.dashsmalltextstyle;

    return (
      <View>
      <Image
        style={ styles.dashimagestyle }
        source={ imgSource }
      />

      <Text style={textStyle}>Dashboard</Text>
      </View>
    );
  }

  renderMyMatesImage(){
    var imgSource = this.state.mymates? mymatesenabledImage : mymatesdisabledImage;
    var textStyle = this.state.mymates? styles.smalltextselectstyle : styles.smalltextstyle;
    return (
      <View>
      <Image
        style={ styles.imagestyle }
        source={ imgSource }
      />

      <Text style={textStyle}>Appy Folks</Text>
      </View>
    );
  }

  renderSettingsImage(){
    var imgSource = this.state.settings? settingsenabledImage : settingsdisabledImage;
    var textStyle = this.state.settings? styles.smalltextselectstyle : styles.smalltextstyle;
    return (
      <View>
      <Image
        style={ styles.imagestyle }
        source={ imgSource }
      />

      <Text style={textStyle}>Settings</Text>
      </View>
    );
  }



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

            {this.renderProfileImage()}


          </TouchableHighlight>
          <TouchableHighlight underlayColor={'#D6D6D6'} style={styles.touchablestyle} onPress={() => this.setState({ profile: false, mydevices: true, dashboard: false, mymates: false, settings: false})}>

            {this.renderMyDeviceImage()}

          </TouchableHighlight>
          <TouchableHighlight underlayColor={'#D6D6D6'} style={styles.touchablestyle} onPress={() => this.setState({ profile: false, mydevices: false, dashboard: true, mymates: false, settings: false})}>

            {this.renderDashboardImage()}

          </TouchableHighlight>

          <TouchableHighlight underlayColor={'#D6D6D6'} style={styles.touchablestyle} onPress={() => this.setState({ profile: false, mydevices: false, dashboard: false, mymates: true, settings: false})}>

            {this.renderMyMatesImage()}

          </TouchableHighlight>
          <TouchableHighlight underlayColor={'#D6D6D6'} style={styles.touchablestyle} onPress={() => this.setState({ profile: false, mydevices: false, dashboard: false, mymates: false, settings: true})}>

            {this.renderSettingsImage()}

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

  smalltextselectstyle: {
    color: '#4cbbe9',
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
  },
  dashsmalltextselectstyle: {
    color: '#4cbbe9',
    fontSize: 10,
    textAlign: 'center',
    width: '100%',
    marginBottom: 35,
    marginLeft: 8,
    marginRight: 8
  }

};
