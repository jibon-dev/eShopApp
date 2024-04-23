import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Loader from '../Loader/loader';
import { BASE_URL } from '../../api/api';

const getTrackingMyParcelListData = async (mobile_no) => {
  const res = await bela(`{BASE_URL}/api/tracking-list/${mobile_no}`);
  return res.data;
};

const TrackingMyParcel = ({navigation}) => {
  const [trackList, setTrackList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const getTrackingList = () => {
    setLoading(true);
    getTrackingMyParcelListData(searchQuery)
      .then(data => {
        setTrackList(data);
      })

      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getTrackingList();
  }, [searchQuery]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setSearchQuery('');
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.trackingParcelContainer}>
      <View style={styles.brandSearchForm}>
        <View style={styles.sectionSearch}>
          <TextInput
            name="searchData"
            placeholder="Search by contact number"
            textAlign="center"
            keyboardType="numeric"
            onChangeText={text => setSearchQuery(text)}
            style={styles.searchStyleInput}
            value={searchQuery}
            selectionColor="#183153"
          />
          <FontAwesome name="search" size={20} style={styles.searchIcon} />
        </View>
      </View>

      {searchQuery === '' ? null : (
        <View>
          {loading ? (
            <Loader />
          ) : trackList.length > 0 ? (
            trackList.map((item, index) => (
              <View style={styles.cardContainer} key={index}>
                <View style={styles.cardWrap}>
                  <View style={styles.card}>
                    <View style={styles.cardContent}>
                      <Text style={styles.textStyle}>
                        Invoice ID : {item?.invoice_number}
                      </Text>
                      <Text style={styles.textStyle}>
                        Phone Number : {item?.phone_number}
                      </Text>
                      <Text style={styles.textStyle}>
                        Delivery Status : {item?.delivery_conformations}
                      </Text>
                      <Text style={styles.textStyle}>Address : {item?.user_address}</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <View style={styles.noParcel}>
              <FontAwesome name="exclamation-circle" size={40} color="red" />
              <Text style={styles.noParcelText}>No matching parcel found</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  trackingParcelContainer: {
    margin: 10,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  cardWrap: {
    flex: 1,
    width: 100,
    margin: 1,
    padding: 2,
  },
  card: {
    borderRadius: 6,
    elevation: 2,
    backgroundColor: '#FFF',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardImage: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  cardImageStyle: {
    width: 100,
    height: 100,
  },
  trackParcelImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },

  cardContent: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
  },
  cartTitle: {
    fontSize: 14,
    textAlign: 'left',
  },
  textStyle: {
    marginBottom: 4,
    fontSize: 14,
    textAlign: 'left',
    // color:"#000000"
  },

  noParcelFile: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  noParcel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noParcelText: {
    marginTop: 10,
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
  noParcelTitle: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
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

export default TrackingMyParcel;