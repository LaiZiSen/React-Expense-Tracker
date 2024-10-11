import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TypeBox = ({typeName, iconNameUnselected, iconNameSelected, onPress, status, color}) => {
    return (
        <Pressable onPress={onPress}>
            <View
                onPress={onPress}
                // key={key}
                style={[styles.box, {backgroundColor: color}, status && styles.selected]}
                // style={[styles.box, {backgroundColor: color, elevation: status ? 5 : null, shadowColor: status ? 'rgba(0, 0, 0, 1)' : 'transparent' }]}
            >
                <Icon 
                    name={status? iconNameSelected: iconNameUnselected}
                    size={25}    
                    color={'white'}
                />
                <View style={{width: 5}}></View>
                <Text 
                    style={{
                        color: 'white', 
                        fontWeight: status? 'bold' : null
                    }}
                >
                    {typeName}
                </Text>
            </View>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    box: {
        height: 55,
        borderRadius: 25,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    selected: {
      borderWidth: 3, 
      borderColor: 'lightgrey', 
      padding: 12, 
    }
});

export default TypeBox;