import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View, Text} from 'react-native';
import About from '../../src/components/About/About';
import Loader from '../components/Loader/loader';
import {BASE_URL} from '../api/api';

const AboutScreen = () => {
  const [loading, setLoading] = useState(true);
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/about-us/`);
        const data = await res.json();
        setAboutData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching about data:', error);
        setLoading(false);
      }
    };
    fetchAboutData();
  }, []);

  return (
    <SafeAreaView style={styles.mainArea}>
      {loading ? (
        <Loader />
      ) 
      : (
        <View style={styles.aboutContent}>
          <Text style={styles.aboutTitle}>About Us</Text>
          <View style={styles.border}/>
          <ScrollView>
            <About aboutData={aboutData}/>
            </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainArea: {
    flex: 1,
  },
  aboutContent: {
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
  aboutTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 6,
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

export default AboutScreen;
