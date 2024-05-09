import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import TrackingMyParcelScreen from '../../screens/TrackingMyParcelScreen';

const Stack = createStackNavigator();

const TrackingMyParcelStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerShown: true,
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#183153',
          height: 50,
        },
        // eslint-disable-next-line react/no-unstable-nested-components
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('UserProfileStack')}
            style={styles.headerLeft}>
            <Ionicons
              name="arrow-back-outline"
              size={25}
              color="#fff"
              style={{padding: 5}}
            />
          </TouchableOpacity>
        ),
        // eslint-disable-next-line react/no-unstable-nested-components
        headerRight: () => (
          <View style={styles.headerRight}>
            <View style={styles.headerContent}>
              <Text style={styles.headerSearchIcon}>
                <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('SearchProductStack', {
                        screen: 'SearchProduct',
                        params: {search_query: ''},
                      })
                    }
                    style={styles.touchableButton}>
                    <FontAwesome name="search" size={20} color="#fff" />
                  </TouchableOpacity>
              </Text>
              <Text style={styles.headerSearchIcon}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('UserProfileStack')}
                  style={styles.touchableButton}>
                  <FontAwesome name="user" size={20} color="#fff" />
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        ),
      })}>
      <Stack.Screen
        name="TrackingMyParcel"
        component={TrackingMyParcelScreen}
        options={{
          title: 'Tracking My Parcel',
          headerTitleAlign: 'left',
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  // Troggle
  headerLeft: {
    marginLeft: 10,
  },
  // User Icon & Search
  headerRight: {
    marginRight: 15,
  },
  headerContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  headerSearchIcon: {
    marginLeft: 20,
  },
  headerUserIcon: {
    marginLeft: 20,
  },
  touchableButton: {
    backgroundColor: '#183153',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
    padding: 3,
    borderRadius: 50,
    overflow: 'hidden',
  },
});

export default TrackingMyParcelStackNavigator;
