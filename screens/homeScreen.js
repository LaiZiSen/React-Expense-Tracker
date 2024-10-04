import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import NavBar from '../components/navBar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = ({navigation}) => {
    const screenName = 'HomeScreen';
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
            <Text>Home</Text>
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

export default HomeScreen;
