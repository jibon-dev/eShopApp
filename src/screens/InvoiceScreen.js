import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Invoice from '../components/Invoice/Invoice';

const InvoiceScreen = ({route, navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Invoice navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
});

export default InvoiceScreen;
