import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Linking,
  Platform,
} from 'react-native';

// Icons
import Feather from 'react-native-vector-icons/Feather';

const CallScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.callIcon}>
          <Feather name="phone-call" size={100} color="#183153" />
        </View>
        <Text
          style={styles.call}
          onPress={() => {
            Linking.openURL('tel:+880130-5606540');
          }}>
          Click to Call
        </Text>
        <View style={styles.callText}>
          <Text style={styles.callMessage}>
            We will accept / answer your call during our office hours 9am to 5pm
            (saturday to thursday)
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        marginBottom: '0%',
      },
      android: {
        marginBottom: 0,
      },
    }),
  },
  callIcon: {
    padding: 10,
    borderRadius: 10,
  },
  call: {
    marginTop: 10,
    padding: 7,
    backgroundColor: '#183153',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    fontWeight: 'bold',
    borderColor: '#183153',
    width: 150,
    color: '#FFF',
  },

  callText: {
    marginTop: 30,
    marginLeft: 4,
    marginRight: 4,
  },

  callMessage: {
    textAlign: 'center',
    lineHeight: 20,
  },
});
export default CallScreen;
