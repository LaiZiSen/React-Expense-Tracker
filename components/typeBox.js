import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TypeBox = ({typeName, iconNameUnselected, iconNameSelected, onPress, status, color}) => {
    return (
        <Pressable onPress={onPress}>
            <View
                onPress={onPress}
                // key={key}
                style={[styles.box, {backgroundColor: color}]}
            >
                <Icon 
                    name={status? iconNameSelected: iconNameUnselected}
                    size={25}    
                    color={'white'}
                />
                <Text style={{color: 'white'}}>{typeName}</Text>
            </View>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    box: {
        height: 50,
        borderRadius: 25,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 5
    },
});

export default TypeBox;