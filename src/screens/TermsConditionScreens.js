import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Platform,
  ScrollView,
} from 'react-native';
import { BASE_URL } from '../api/api';
import Loader from '../components/Loader/loader';
import TermsCondition from '../components/About/TermsCondition';


const TermsConditionScreens = () => {
  const [loading, setLoading] = useState(true);
  const [termsCondition, setTermsCondition] = useState([])

  useEffect(() => {
    const fetchTermsConditionData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/terms-and-conditions/`);
        const data = await res.json();
        setTermsCondition(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Terms Condition data:', error);
        setLoading(false);
      }
    };
    fetchTermsConditionData();
  }, []);

  return (
    <SafeAreaView style={styles.termsConditionContainer}>
      {
        loading ?(
          <Loader/>
        ):
        (
          <View style={styles.termsCondition}>
            <Text style={styles.termsConditionTitle}>Terms & Condition</Text>
            <View style={styles.border}/>
            <ScrollView>
              <View style={styles.termsConditionMargin}>
                <TermsCondition termsCondition={termsCondition}/>
              </View>
            </ScrollView>
          </View>
        )
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  termsConditionContainer: {
    flex: 1,
  },
  termsCondition: {
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
  termsConditionMargin: {
    margin: 15,
  },
  termsConditionTitle: {
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

export default TermsConditionScreens;
