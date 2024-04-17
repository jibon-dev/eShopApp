import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Search from '../../src/components/Search/Search';

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.mainArea}>
      <Search />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainArea: {
    flex: 1,
  },
});

export default SearchScreen;
