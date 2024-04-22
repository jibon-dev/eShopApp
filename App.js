// App.js
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Platform,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';

const navigationRef = React.createRef();
const nav = () => navigationRef.current;

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar backgroundColor="#551E18" barStyle="light-content" />
        <NavigationContainer>
          <DrawerNavigator nav={nav} />
        </NavigationContainer>
      </SafeAreaView>
      <View style={styles.statusBarFooter} />
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    color: '#000',
  },
  statusBarFooter: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: '#FF551E18F',
        color: '#FFF',
        flex: 0.1,
        marginBottom: -40,
      },
      android: {
        marginBottom: 0,
        flex: 0,
        backgroundColor: '#551E18',
        color: '#FFF',
      },
    }),
  },
});

export default App;
