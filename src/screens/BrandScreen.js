import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  ScrollView,
  TextInput,
} from 'react-native';

// Icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Brand from '../components/Brand/Brand';
import Loader from '../components/Loader/loader';
import { BASE_URL } from '../api/api';


const BrandScreens = ({navigation}) => {
  const [brand, setBrandList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setSearchValue('');
    });

    return unsubscribe;
  }, [navigation]);


  useEffect(()=>{
    async function sleep() {
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    sleep();

    const fetchBrandData = async ()=>{
      try{
        const res = await fetch(`${BASE_URL}/products/api/brand/`);
        const data =  await res.json();
        setBrandList(data);
        setLoading(false);
      }
      catch(error){
        console.error('Error fetching brand data:', error);
        setLoading(false);
      }
    }
    fetchBrandData();
  },[])

  let brandValue = brand.filter(brand => {
    if (searchValue === '') {
      return brand;
    } else if (brand.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return brand;
    }
  });
  
  return (
    <SafeAreaView style={styles.brandContainer}>
      {loading ? (
        <Loader />
      ) : (
        <View style={styles.brand}>
          {/* Brand Title */}
          <View style={styles.brandSearchForm}>
            <View style={styles.sectionSearch}>
              <TextInput
                name="searchData"
                placeholder="Search Our Brand Name"
                textAlign="center"
                onChangeText={searchValue => setSearchValue(searchValue)}
                style={styles.searchStyleInput}
                value={searchValue}
                selectionColor="#183153"
              />
              <FontAwesome name="search" size={20} style={styles.searchIcon} />
            </View>
          </View>
          {/* Brand Main Content */}
          <ScrollView>
            <Brand
              brandValue={brandValue}
              searchValue={searchValue}
              navigation={navigation}
            />
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  brandContainer: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  brand: {
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
  brandTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  brandSearchForm: {
    marginTop: 5,
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 5,
  },

  sectionSearch: {
    ...Platform.select({
      ios: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#1b3c60',
        height: 40,
        borderRadius: 15,
        overflow: 'hidden',
        margin: 8,
        textAlign: 'center',
      },
      android: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#1b3c60',
        height: 40,
        borderRadius: 15,
        overflow: 'hidden',
        margin: 8,
        textAlign: 'center',
      },
    }),
  },
  searchStyleInput: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginLeft: 10,
  },
  searchIcon: {
    backgroundColor: '#1b3c60',
    color: '#FFF',
    padding: 10,
    height: 40,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
});

export default BrandScreens;
