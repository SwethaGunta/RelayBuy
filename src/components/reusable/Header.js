import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Header =()=>
{
    const { headerContainerStyle, textStyle } = styles;
    return(
        <View style = {headerContainerStyle} >
            <Text style = {textStyle}>
                RelayBuy
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    headerContainerStyle:{
        backgroundColor: '#E0E0E0',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle:{
        fontSize: 20
    }
})

export { Header };