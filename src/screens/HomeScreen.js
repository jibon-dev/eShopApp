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
import MakeUp from '../../src/components/Home/MakeUp';
import BySkin from '../../src/components/Home/BySkin';
import ByConcern from '../../src/components/Home/ByConcern';

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
            {/* Hot Deals */}
            <View style={styles.hotDeals}>
              <Text style={styles.hotDealsTitle}>Hot Deals</Text>
              <HotDeals navigation={navigation} />
            </View>
            {/* By Makeup */}
            <View style={styles.byMakeup}>
              <Text style={styles.byMakeupTitle}>By Makeup</Text>
              <MakeUp navigation={navigation}/>
            </View>
            {/* By Skin */}
            <View style={styles.bySkin}>
              <Text style={styles.bySkinTitle}>By Skin</Text>
              <BySkin navigation={navigation} />
            </View>
            {/* ByConcern */}
            <View style={styles.byConcern}>
              <Text style={styles.byConcernTitle}>By Concern</Text>
              <ByConcern navigation={navigation} />
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
  byMakeup: {
    overflow: 'hidden',
    padding: 1,
    marginTop: 10,
  },
  byMakeupTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    color:"#000"
  },
  bySkin: {
    overflow: 'hidden',
    marginTop: 10,
  },
  bySkinTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    color:"#000"
  },
  byConcern: {
    overflow: 'hidden',
    padding: 4,
    marginTop: 10,
  },
  byConcernTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    color:"#000"
  },
});

export default HomeScreen;
