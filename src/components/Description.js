import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Button } from 'native-base';

const Description = (props) =>
{
    return(
        <View style={styles.descriptionContainerStyle}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    descriptionContainerStyle:{
        borderColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowColor: '#000000',
        borderRadius: 3,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        margin: 3,
        padding: 3,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    }
})

export default Description