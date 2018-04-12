import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const ItemSection = (props) =>
{
    return(
        <View style = {styles.itemsectionContainerStyle}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    itemsectionContainerStyle: {
        margin: 3,
        padding: 3
    }
})

export default ItemSection