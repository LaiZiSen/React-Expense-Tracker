import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import TypeBox from '../components/typeBox';

import Types from '../assets/expenseType'

const FormScreen = ({navigation}) =>  {
    const insets = useSafeAreaInsets();
    const screenName = 'FormScreen';
    const [expenseType, setExpenseType] = useState(0);

    const handleType = (key) => {
      console.log(expenseType, key);
      if (expenseType === key) {
        setExpenseType(0)
      } else {
        setExpenseType(key)
      }
      console.log(expenseType, key);
    }

    return (
      <>
        <View
          style={{
            flex: 1,
            backgroundColor: '#18d1ed',
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          }}
        >
          <StatusBar barStyle="light-content" backgroundColor="#18d1ed" />
          <View style={styles.headerView}>
            <Text style={styles.headerText}>New Expense</Text>
            <AntDesignIcon 
              name='back' 
              style={styles.backIcon} 
              size={28}
              onPress={navigation.goBack}
            />
          </View>

          <View style={styles.content}>
            
            <View style={{height: 60}}>
            <ScrollView horizontal={true} overScrollMode={'never'} showsHorizontalScrollIndicator= {false}>
              {Object.entries(Types).map(([key, value]) => (
                <TypeBox
                  key={key}
                  typeName={value.name}
                  iconNameUnselected={value['icon-name-unselected']}
                  iconNameSelected={value['icon-name-selected']}
                  onPress={()=> {handleType(key)}}   
                  status={expenseType === key}
                  color={value.color}    
                />
              ))}
            </ScrollView>
            </View>

            <Text style={{alignSelf: 'flex-start'}} >{expenseType}</Text>

          </View>
        </View>
      </>
    );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  headerView:{
    // height: 80,
    width: '100%',
    alignItems: 'flex-start',
    backgroundColor: '#18d1ed',
    verticalAlign: 'middle',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerText: {
      fontWeight: 'bold',
      fontSize: 32,
      alignSelf: 'start',
      backgroundColor: '#18d1ed',
      color: 'white',
      // width: '100%',
      paddingLeft: 25,
      paddingVertical: 15
  },
  backIcon: {
    color: 'white',
    alignSelf: 'center',
    paddingRight: 20
  },
});

export default FormScreen;
