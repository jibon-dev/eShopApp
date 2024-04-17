import React from 'react';
import {SafeAreaView, StyleSheet, Platform} from 'react-native';
import Giveaway from '../components/Giveaway/Giveaway';

const GiveawayScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Giveaway />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    ...Platform.select({
      ios: {
        marginBottom: '0%',
      },
      android: {
        marginBottom: 0,
      },
    }),
  },
});
export default GiveawayScreen;
