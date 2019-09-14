/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native'
import AppStack from './screens'




const BackgroundColor = Platform.OS === 'ios' ? null : require('react-native-background-color')

class App extends Component {
  componentDidMount() {
    Platform.OS === 'ios' ? null : BackgroundColor.setColor('#FFFFFF');
  }

  render() {
    return (
      <AppStack />
    );
  }
};

export default App;
