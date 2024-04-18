import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductDetailScreen = () => {
  return (
    <View styles={styles.container}>
      <Text>ProductDetailScreen</Text>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
