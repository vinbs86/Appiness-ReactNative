import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginScreen from './screens/LoginScreen';
import HomeScreenContainer from './screens/HomeScreenContainer';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginScreen} hideNavBar={true} initial/>
        <Scene key="homescreen" component={HomeScreenContainer} hideNavBar={true}/>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
