import React from 'react';
import firebase from 'firebase';
import { View, Text, StyleSheet} from 'react-native';
import { Button } from 'native-base';

const Header =()=>
{
    const { headerContainerStyle, textStyle, rightHeaderTextStyle, buttonStyle } = styles;
    return(
        <View style = {headerContainerStyle} >
            <Text/>
            <Text style = {textStyle}>
                RelayBuy
            </Text>
            <Button transparent style = {buttonStyle} onPress={()=>firebase.auth().signOut()}>
            <Text style = {rightHeaderTextStyle}>
                Log Out
            </Text>
            </Button>
        </View>
    );
}
const styles = StyleSheet.create({
    headerContainerStyle:{
        flexDirection: 'row',
        backgroundColor: '#E0E0E0',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textStyle:{
        fontSize: 20
    },
    buttonStyle:{
        alignSelf: 'flex-end',
        alignContent: 'center'
        
    },
    rightHeaderTextStyle: {
        fontSize: 12
    }
})

export { Header };