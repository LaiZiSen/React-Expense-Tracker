import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, TextInput, View, SectionList } from 'react-native';
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import Types from '../assets/expenseType'

import TypeBox from '../components/typeBox';
import FavouriteName from '../components/favouriteName';
import FavouritedNameBox from '../components/favouriteNameBox';

const FormScreen = ({navigation}) =>  {
    const insets = useSafeAreaInsets();
    const screenName = 'FormScreen';

    const [expenseType, setExpenseType] = useState(0);
    const [amount, setAmount] = useState('0.00');
    const [name, setName] = useState('');

    const handleType = (key) => {
      if (expenseType === key) {
        setExpenseType(0)
      } else {
        setExpenseType(key)
      }
    }

    const handleAmountChange = (text) => {
      const cleanText = text.replace(/[^0-9]/g, '');
  
      if (cleanText.length > 0) {
        const numericValue = parseInt(cleanText, 10) * 0.01;
        const formattedValue = numericValue.toFixed(2); // Format to 2 decimal places
        setAmount(formattedValue);
      } else {
        setAmount('0.00');
      }
    };

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
            
            <View style={{height: 70, verticalAlign: 'middle'}}>
            <ScrollView horizontal={true} overScrollMode={'never'} showsHorizontalScrollIndicator= {false} contentContainerStyle={{alignItems: 'center'}}>
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

            <TextInput style={styles.input} placeholder='Amount' onChangeText={handleAmountChange} value={amount} keyboardType='numeric'/>
            <TextInput style={styles.input} placeholder='Name' onChangeText={setName} value={name} />

            <FavouritedNameBox pressName={setName}/>

          </View>
        </View>
      </>
    );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#FCFCFC',
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
  input: {
    width: '100%',
    padding: 15,
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    marginVertical: 20
  },
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

export default FormScreen;
