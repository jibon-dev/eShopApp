import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import About from '../../src/components/About/About';
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
        <ScrollView>
          <About aboutData={aboutData}/>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainArea: {
    flex: 1,
  },
});

export default AboutScreen;
