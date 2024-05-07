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
import { CartProvider } from './src/contexts/CartContext';

const navigationRef = React.createRef();
const nav = () => navigationRef.current;



const App = () => {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar backgroundColor="#183153" barStyle="light-content" />
        <CartProvider>
            <NavigationContainer ref={navigationRef}>
                <DrawerNavigator nav={nav}/>
            </NavigationContainer>
        </CartProvider>
      </SafeAreaView>
      <View style={styles.statusBarFooter} />
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: "#183153",
    color: "#FFFFFF"
  },
  statusBarFooter: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: '#183153',
        color: "#FFFFFF",
        flex: 0.1,
        marginBottom: -40,
      },
      android: {
        marginBottom: 0,
        flex: 0,
        backgroundColor: '#183153',
        color: "#FFFFFF"
      },
    }),
  },
});

export default App;
