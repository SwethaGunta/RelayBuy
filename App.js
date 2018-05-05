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
import ShoppingList from './src/components/ShoppingList';
import firebase from 'firebase';
import  { Header } from './src/components/reusable';
import LoginPage from './src/components/LoginPage';
import { Button, Spinner } from 'native-base';



export default class App extends Component {

  state = {
    isLoggedIn: null
  }
  async componentDidMount() 
  {
      
      const firebaseConfig = {
          apiKey: 'AIzaSyDStVSUJfHQrTpeYelitiprYNKuQaON5VQ',
          authDomain: 'relaybuy.firebaseapp.com',
          databaseURL: 'https://relaybuy.firebaseio.com',
          projectId: 'relaybuy',
          storageBucket: 'relaybuy.appspot.com',
          messagingSenderId: '942062184960'
      }

      firebase.initializeApp(firebaseConfig);
      firebase.auth().onAuthStateChanged((user)=>{
        if(user)
        {
          this.setState({isLoggedIn: true})
        }
        else
        {
          this.setState({isLoggedIn: false})
        }
      })
  }

  showSuitableForm = () =>
  {
    switch (this.state.isLoggedIn)
    {
      case true:
      return (
      <ShoppingList />
      //<Button onPress = {()=>firebase.auth().signOut()}><Text>Log Out</Text></Button>
      )
      case false: 
      return <LoginPage />
      default:
      return <Spinner />

    }
  }
  render() {
    return (
      <View>
        <Header />
        {this.showSuitableForm()}
     </View>
    );
  }
}


