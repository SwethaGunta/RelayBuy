import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';

import shoppingstore from '../assets/shoppinghd.png';
import Skin from './reusable/Skin';
import Input from './reusable/Input';
import { Icon, Button } from 'native-base';


class LoginPage extends Component{
    state = {
        email: '',
        password: ''
    }
    handleLoginSignUpPress = () =>{
        
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
                        <Button onPress={this.handleLoginSignUpPress}>
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
    }
});
export default LoginPage