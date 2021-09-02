import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    );
  }
}
