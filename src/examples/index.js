import { Router, Scene } from 'react-native-router-flux';
import React from 'react';
import PropTypes from 'prop-types';
import { NotTabbed, TabbedView, Home } from './screens/index';

const Component = () => (
  <Router>
    <Scene key="Root" >
      <Scene key="home" component={Home} hideNavBar />
      <Scene key="tabbed" component={TabbedView} hideNavBar />
      <Scene key="notTabbed" component={NotTabbed} hideNavBar />
    </Scene>
  </Router>
);


export default Component;
