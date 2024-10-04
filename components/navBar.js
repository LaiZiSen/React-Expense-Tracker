import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const NavBar = ({navigation, currentScreen}) => {
  return (
      <>
        <View style={styles.navBar}>
          <IonIcons
            name={currentScreen==='HomeScreen' ? 'home' : 'home-outline'}
            disabled={currentScreen==='HomeScreen'}
            onPress={() => {navigation.navigate('HomeScreen')}}
            size={20}
          />
          
          <IonIcons
            name={currentScreen==='ChartScreen' ? 'bar-chart' : 'bar-chart-outline'}
            disabled={currentScreen==='ChartScreen'}
            onPress={() => {navigation.navigate('ChartScreen')}}
            size={20}
          />

      </View>
      <EntypoIcon
        name='plus' 
        backgroundColor={'blue'}
        onPress={() => {navigation.navigate('FormScreen')}}
        size={35}
        color={'white'}
        style={styles.plusIcon}/>
    </>
  )
}

const styles = StyleSheet.create({
  navBar: {
      position: 'absolute', 
      bottom: 0,
      height: 50,
      width: 270,
      backgroundColor: "lightgrey",
      justifyContent: 'space-around',
      alignItems: 'center',
      alignSelf: 'center',
      borderTopEndRadius: 50,
      borderTopLeftRadius: 50,
      flexDirection: 'row',
      shadowColor: 'black',
      shadowRadius: 10
  },
  selected: {
    color: 'grey'
  },
  plusIcon: {
    padding: 12, 
    borderRadius: 30,
    position: 'absolute',
    bottom: 13,
    alignSelf: 'center',
  }
})

export default NavBar