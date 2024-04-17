import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Contact from '../../src/components/Contact/Contact';

const ContactScreen = () => {
  return (
    <SafeAreaView style={styles.mainArea}>
      <Contact />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainArea: {
    flex: 1,
  },
});

export default ContactScreen;
