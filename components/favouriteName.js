import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

const FavouriteName = ({key, name, onPress}) => {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.nameView}>
                <Text style={styles.nameText}>{name}</Text>
                <Icon name='delete' size={28} onPress={() => {console.log("delete this")}} style={styles.deleteIcon}/>
            </View>
            <View style={{height: 1, marginHorizontal: 20, backgroundColor: 'white'}}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    nameView: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        // backgroundColor: 'white',
        padding: 10,
        justifyContent: 'space-between',
    },
    nameText: {
        fontSize: 30,
        marginLeft: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    deleteIcon: {
        marginRight: 20,
        color: 'white'
    }
});

export default FavouriteName;