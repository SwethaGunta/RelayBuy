import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = (props) =>
{
    const styles = StyleSheet.create({
        inputContainerStyle: {
            margin : 5,
            padding: 2,
            justifyContent: 'center',
            alignItems: 'stretch',
            opacity: 0.9
            },
        inputboxStyle: {
            margin: 5,
            padding: 4,
            shadowColor: '#000000',
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 3,
            shadowOpacity: 0.3,
            elevation: 1,
            borderColor: borderColor,
            borderRadius: 3,
            borderWidth: 0.5
        }
        })
        
    const { value, placeholder, inlineImageLeft, keyboardType, onChangeText, autoCorrect, borderColor, secureTextEntry } = props
    return(
        <View style ={styles.inputContainerStyle}>
            <TextInput 
                value = {value}
                placeholder = {placeholder}
                underlineColorAndroid = 'transparent'
                inlineImageLeft = {inlineImageLeft}
                keyboardType= {keyboardType}
                onChangeText = {onChangeText}
                autoCorrect = {autoCorrect}
                secureTextEntry = {secureTextEntry}
                style = {styles.inputboxStyle}
            />
        </View>
    );
}



export  {Input}