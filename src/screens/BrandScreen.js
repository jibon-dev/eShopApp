import React from 'react';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';

const BrandScreen = () => {
  return (
    <SafeAreaView style={styles.mainArea}>
      <View>
        <Text>Goo</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containArea: {
    flex: 1,
  },
});

export default BrandScreen;
