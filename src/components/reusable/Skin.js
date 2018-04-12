import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

const Skin = ({ borderColor, children }) => {
    const styles = StyleSheet.create({
        containerStyle:{
            borderWidth: 1.5,
            borderColor: borderColor,
            borderRadius: 4,
            opacity: 0.7,
            margin: 5,
            alignSelf: 'center',
            width : '100%',
            shadowColor: '#000000',
            shadowOffset: {width: 0, height: 3},
            shadowOpacity: 0.9,
            shadowRadius: 4,
            elevation: 2,
            justifyContent: 'space-around'
        }
    })
    return(
        <View style={styles.containerStyle} >
            {children}
        </View>
    );
}

export default Skin