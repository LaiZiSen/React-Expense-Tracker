import * as React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';

import FavouriteName from './favouriteName';

const FavouritedNameBox = ({pressName}) => {
    return (
        <View style={styles.favouritedNameBox}>
            <Text style={styles.favouritedNameHeader}> Favourites</Text>
            <View style={{height: 1, backgroundColor: 'lightgrey'}}/>
            <View style={{backgroundColor: '#baf0f2'}}>
            <ScrollView style={styles.favouritedNameContent} overScrollMode={'never'}>
                
                <FavouriteName 
                key={1} 
                name={'Panmee'} 
                onPress={() => {pressName('Panmee')}}
                />
                <FavouriteName 
                key={2} 
                name={'IcelemonTea'} 
                onPress={() => {pressName('IcelemonTea')}}
                />

            </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    favouritedNameBox: {
      backgroundColor: '#baf0f2',
      borderRadius: 15,
      elevation: 3,
      height: 380,
      flexGrow: 0,
    },
    favouritedNameHeader: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: 30,
      textAlign: 'center',
      backgroundColor: '#95d6dc',
      paddingVertical: 5,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15
    },
    favouritedNameContent: {
      flexGrow: 0,
      maxHeight: 300
    }

});

export default FavouritedNameBox