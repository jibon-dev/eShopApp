import React from 'react';
import {StyleSheet, SafeAreaView, TouchableOpacity, Text} from 'react-native';
import Home from '../../src/components/Home/Home';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.containArea}>
      <Home />
      <TouchableOpacity onPress={() => navigation.navigate('ProductListStack')}>
        <Text>Product List</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containArea: {
    flex: 1,
  },
});

export default HomeScreen;
