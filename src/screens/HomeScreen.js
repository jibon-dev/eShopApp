import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Platform,
  ScrollView,
} from 'react-native';
import Loader from '../components/Loader/loader';
import Home from '../../src/components/Home/Home';
import HotDeals from '../../src/components/Home/HotDeals';

import {BASE_URL} from '../api/api';

const HomeScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/slider-list/`);
        const data = await res.json();
        setSliders(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching slider data:', error);
        setLoading(false);
      }
    };
    fetchSliderData();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      {loading ? (
        <Loader />
      ) : (
        <View style={styles.container}>
          <ScrollView>
            <Home sliders={sliders} />
            <View style={styles.hotDeals}>
              <Text style={styles.hotDealsTitle}>Hot Deals</Text>
              <HotDeals navigation={navigation} />
            </View>
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
    color:"balck",
  },
  container: {
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
  hotDeals: {
    overflow: 'hidden',
    padding: 3,
    marginTop: 10,
  },
  hotDealsTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    color:"black"
  },
});

export default HomeScreen;
