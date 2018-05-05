import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';
import shoppingstore from '../assets/shoppinghd.png';
import { Skin, Input } from './reusable';
import { Icon, Button, Spinner } from 'native-base';


class LoginPage extends Component{
    state = {
        email: '',
        password: '',
        error: '',
        isLoading: false
    }

    

    handleLoginSignUpPress = () =>{
        const { email, password } = this.state;
        this.setState({ error: '', isLoading: true })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess)
                    .catch(()=>{
                        this.setState({ error: 'Authentication Failed!', isLoading: false })
                    })
            }
                
            )

    }
    onLoginSuccess = () =>{
        this.setState({
            email: '',
            password: '',
            isLoading: false
        })
    }

    showButton = () => {
        if(this.state.isLoading)
        {
            return <Spinner style = {styles.spinnerStyle} />
        }
        return (
            <Button onPress={this.handleLoginSignUpPress} style = {styles.buttonStyle}>
                <Text>Log In/Sign Up</Text>
            </Button>
        )
    }
  
    render(){
        const { imageContainerStyle, errorStyle, buttonStyle, spinnerStyle } = styles
        return(
                <ImageBackground  style={imageContainerStyle}>
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
                        <Text style = {errorStyle}> {this.state.error} </Text>
                        {this.showButton()}
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
        justifyContent: 'center',
        padding: 10
    },
    buttonStyle: {
        alignSelf: 'center',
        margin: 3
    },
    errorStyle: {
        alignSelf: 'center',
        color: '#FF0000'
    },
    spinnerStyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default LoginPage