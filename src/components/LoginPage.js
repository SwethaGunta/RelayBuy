import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';
import shoppingstore from '../assets/shoppinghd.png';
import { Skin, Input } from './reusable';
import { Icon, Button } from 'native-base';


class LoginPage extends Component{
    state = {
        email: '',
        password: '',
        authDone: true
    }
    async componentWillMount() {
        
        const firebaseConfig = {
            apiKey: 'AIzaSyDStVSUJfHQrTpeYelitiprYNKuQaON5VQ',
            authDomain: 'relaybuy.firebaseapp.com',
            databaseURL: 'https://relaybuy.firebaseio.com',
            projectId: 'relaybuy',
            storageBucket: 'relaybuy.appspot.com',
            messagingSenderId: '942062184960'
        }
  
firebase.initializeApp(firebaseConfig);
    }
    handleLoginSignUpPress = () =>{
       firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch(
                firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
                    .catch(error => Alert.alert(error))
            )

    }
     
    render(){
       
        return(
                <ImageBackground  style={styles.imageContainerStyle}>
                    <Skin borderColor = '#7B1FA2' >
                        <Input
                            value = {this.state.email} 
                            placeholder = "user@gmail.com"
                            onChangeText = {email => this.setState({ email })}
                            borderColor = '#808080'
                            inlineImageLeft = 'ic_launcher'
                            keyboardType= 'email-address'
                        /> 
                        <Input
                            value = {this.state.password} 
                            placeholder = "password"
                            onChangeText = {password => this.setState({ password })}
                            borderColor = '#808080'
                            inlineImageLeft = 'ic_launcher'
                            keyboardType= 'default'
                            secureTextEntry
                        />
                        <Button onPress={this.handleLoginSignUpPress} style = {styles.buttonStyle}>
                            <Text>Log In/Sign Up</Text>
                        </Button>

                    </Skin>
                </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    imageContainerStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F48FB1',
        justifyContent: 'center'
    },
    buttonStyle: {
        alignSelf: 'center'
    }
});
export default LoginPage