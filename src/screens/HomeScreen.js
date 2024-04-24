import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Platform,
  ScrollView,
  Image,
  Dimensions,
  Alert
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
  const [hotDeals, setHotDeals] = useState([]);
  const [byMakeup, setByMakeup] = useState([]);
  const [bySkin, setBySkin] = useState([]);
  const [byConcern, setByConcern] = useState([]);

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

    // Skin categories ====================
    const fetchBySkinCategory =  async()=>{
      try{
        const res =  await fetch(`${BASE_URL}/api/skin-categories/`);
        const data  = await res.json();
        setBySkin(data);
        setLoading(false);
      }
      catch(error){
        console.error('Error fetching skin categories data:', error);
        setLoading(false);
      }
    }

    // Concern categories ====================
    const fetchByConcernCategory =  async ()=>{
      try{
        const res = await fetch(`${BASE_URL}/api/concern-categories/`);
        const data = await res.json();
        setByConcern(data);
        setLoading(false)
      }
      catch (error){
        console.error('Error fetching concern categories data:', error);
        setLoading(false);
      }
    }

    fetchSliderData();
    fetchBySkinCategory();
    fetchByConcernCategory();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      {loading ? (
        <Loader />
      ) : (
        <View style={styles.container}>
          <ScrollView>
            <Home sliders={sliders} navigation={navigation} />
            
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
              <BySkin byMakeup={byMakeup} navigation={navigation} />
            </View>
            {/* ByConcern */}
            <View style={styles.byConcern}>
              <Text style={styles.byConcernTitle}>By Concern</Text>
              <ByConcern byConcern={byConcern} navigation={navigation} />
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
  image: {
    width: '100%',
    height: Dimensions.get('window').width * 0.6,
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
