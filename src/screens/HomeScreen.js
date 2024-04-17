import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Home from '../../src/components/Home/Home';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.containArea}>
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containArea: {
    flex: 1,
  },
});

export default HomeScreen;
