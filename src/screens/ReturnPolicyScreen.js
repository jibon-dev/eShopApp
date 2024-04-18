import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Platform,
  ScrollView,
} from 'react-native';
// import {useWindowDimensions} from 'react-native';
// import RenderHtml from 'react-native-render-html';
// import Loader from '../components/Loader/loader';

const ReturnPolicyScreen = () => {
  return (
    <SafeAreaView style={styles.returnPolicyContainer}>
      <View style={styles.returnPolicy}>
        <Text style={styles.returnPolicyTitle}>
          Returns, Refunds and Exchange
        </Text>
        <ScrollView>
          <View style={styles.returnPolicyMargin}>
            {/* <RenderHtml contentWidth={width} source={source} /> */}
            <Text>Test Here</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );

  // return (
  //   <SafeAreaView style={styles.noDataContainer}>
  //     <Text style={styles.noDataTitle}>No Data Found</Text>
  //   </SafeAreaView>
  // );
};

const styles = StyleSheet.create({
  returnPolicyContainer: {
    flex: 1,
  },
  returnPolicy: {
    flex: 1,
    ...Platform.select({
      ios: {
        marginBottom: '0%',
      },
      android: {
        marginBottom: 0,
      },
    }),
  },
  returnPolicyMargin: {
    margin: 15,
  },
  returnPolicyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    overflow: 'hidden',
  },
  returnPolicySubTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
    lineHeight: 20,
  },
  returnPolicyText: {
    textAlign: 'justify',
    lineHeight: 24,
    marginBottom: 10,
  },
  noDataContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noDataTitle: {
    fontWeight: 'bold',
  },
});

export default ReturnPolicyScreen;
