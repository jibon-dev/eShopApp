import React,{useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Platform,
  ScrollView,
} from 'react-native';
import Loader from '../components/Loader/loader';
import ReturnPolicy from '../components/About/ReturnPolicy';
import { BASE_URL } from '../api/api';

const ReturnPolicyScreen = () => {
  const [loading, setLoading] = useState(true);
  const [returnPolicy, setReturnPolicy] = useState([])

  useEffect(() => {
    const fetchReturnPolicyData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/return-policy/`);
        const data = await res.json();
        setReturnPolicy(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching return policy data:', error);
        setLoading(false);
      }
    };
    fetchReturnPolicyData();
  }, []);

  return (
    <SafeAreaView style={styles.returnPolicyContainer}>
      {
        loading ?
        (<Loader/>):
        (
        <View style={styles.returnPolicy}>
          <Text style={styles.returnPolicyTitle}>Returns, Refunds and Exchange</Text>
          <View style={styles.border}/>
          <ScrollView>
            <ReturnPolicy returnPolicy={returnPolicy} />
            </ScrollView>
          </View>
        )
      }
    </SafeAreaView>
  );
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
    color:"#000000"
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
  border: {
    marginTop:4,
    borderBottomWidth: 0.9,
    borderBottomColor: 'gray',
    marginLeft:5,
    marginRight:5
  },
});

export default ReturnPolicyScreen;
