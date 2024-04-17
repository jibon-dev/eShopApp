import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import About from '../../src/components/About/About';

const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.mainArea}>
      <About />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainArea: {
    flex: 1,
  },
});

export default AboutScreen;
