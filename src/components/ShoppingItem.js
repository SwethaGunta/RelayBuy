import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Item from './Item';
import ItemSection from './ItemSection';
import Description from './Description';
import { Thumbnail, Badge } from 'native-base';
import Mode from './Mode';

//problem in this section rendering but not displaying

const ShoppingItem = ({eachItem}) =>
{
    const signalColor = '#03A9F4'
    return (
        <View>
            <Item>
                <ItemSection>
                    <Thumbnail source = {{uri: eachItem.urlToImage}} size = {40} />
                </ItemSection>
                 <ItemSection>
                    <Mode signalColor = {signalColor}/>
                </ItemSection>
                <ItemSection>
                    <Description>
                        <Text>
                            {eachItem.author}
                        </Text>
                    </Description>
                </ItemSection>
                
            </Item>
        </View>
    )
}

export default ShoppingItem