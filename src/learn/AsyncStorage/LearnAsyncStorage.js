import React, {useState} from 'react';
import {View, StyleSheet, Text, Platform, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LearnAsyncStorage = () => {
  const [user, setUser] = useState(null);
  const setData = async () => {
    await AsyncStorage.setItem('name', 'Jibon');
  };
  const getData = async () => {
    const name = await AsyncStorage.getItem('name');
    setUser(name);
    console.log('Name :', name);
  };
  const removeData = async () => {
    AsyncStorage.removeItem('name');
  };

  return (
    <View style={styles.homeContainer}>
      <View style={styles.contact}>
        <Text style={styles.homeTitle}>Hello {user} </Text>
        <Button title="Set Data" onPress={setData} />
        <Button title="get Data" onPress={getData} />
        <Button title="remove" onPress={removeData} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  home: {
    flex: 1,
    padding: 5,
    ...Platform.select({
      ios: {
        marginBottom: '0%',
      },
      android: {
        marginBottom: 0,
      },
    }),
  },
  homeTitle: {
    textAlign: 'center',
  },
});

export default LearnAsyncStorage;
