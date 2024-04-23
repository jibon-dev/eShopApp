import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform,
} from 'react-native';
import { BASE_URL } from '../api/api';
import Loader from '../components/Loader/loader';
import SecurityPrivacy from '../components/About/SecurityPrivacy';

const SecurityPrivacyScreens = () => {
  
  const [loading, setLoading] = useState(true);
  const [securityPrivacy, setSecurityPrivacy] = useState([])

  useEffect(() => {
    const fetchSecurityPrivacyData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/security-privacy/`);
        const data = await res.json();
        setSecurityPrivacy(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching security privacy data:', error);
        setLoading(false);
      }
    };
    fetchSecurityPrivacyData();
  }, []);

  return (
    <SafeAreaView style={styles.securityPrivacyContainer}>
      {
        loading?(<Loader />):
        (
          <View style={styles.securityPrivacy}>
            <Text style={styles.securityPrivacyTitle}>Security & Privacy</Text>
            <View style={styles.border}/>
            <ScrollView>
              <View style={styles.securityPrivacyMargin}>
                <SecurityPrivacy securityPrivacy={securityPrivacy}/>
              </View>
            </ScrollView>
        </View>
        )
      }
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  securityPrivacyContainer: {
    flex: 1,
  },
  securityPrivacy: {
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
  securityPrivacyMargin: {
    margin: 15,
  },
  securityPrivacyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    overflow: 'hidden',
    color:"#000000"
  },
  
  border: {
    marginTop:4,
    borderBottomWidth: 0.9,
    borderBottomColor: 'gray',
    marginLeft:5,
    marginRight:5
  },
});
export default SecurityPrivacyScreens;
