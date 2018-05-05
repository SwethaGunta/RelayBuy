import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Badge } from 'native-base';

const Mode = (props) =>
{
    const { signalColor } = props
    return(
        <Badge style = {{backgroundColor: signalColor, height: 12}}/>
    )
}

export {Mode}
