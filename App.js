/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/reusable/Header';
import ShoppingList from './src/components/ShoppingList';
import LoginPage from './src/components/LoginPage';


export default class App extends Component {
  render() {
    return (
      <View>
        <LoginPage />
     </View>
    );
  }
}


