import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import NavBar from '../components/navBar';

const ChartScreen = ({navigation}) =>  {
    const screenName = 'ChartScreen';
    const insets = useSafeAreaInsets();

    return (
        <>
          <View
              style={[
                  styles.container,
                  {
                  paddingTop: insets.top,
                  paddingBottom: insets.bottom,
                  paddingLeft: insets.left,
                  paddingRight: insets.right,
                  },
              ]}
            >
            <Text>Chart</Text>
            <StatusBar style="auto" />
            </View>
            <NavBar navigation={navigation} currentScreen={screenName}/>
        </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChartScreen;
