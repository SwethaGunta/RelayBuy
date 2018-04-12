import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Item = (props) =>
{
    return (
        <View style={styles.itemContainerStyle}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainerStyle: {
        margin: 10,
        padding: 5,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        borderRadius: 3,
        shadowRadius: 3,
        elevation: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        
    }
})

export default Item