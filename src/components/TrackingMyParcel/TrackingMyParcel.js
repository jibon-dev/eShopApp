import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const TrackingMyParcel = ({navigation}) => {
  return (
    <View style={styles.trackingParcelContainer}>
      <View style={styles.brandSearchForm}>
        <View style={styles.sectionSearch}>
          <TextInput
            name="searchData"
            placeholder="Search by contact number"
            textAlign="center"
            keyboardType="numeric"
            style={styles.searchStyleInput}
            selectionColor="#183153"
          />
          <FontAwesome name="search" size={20} style={styles.searchIcon} />
        </View>
      </View>

      <View>
        <View style={styles.cardContainer}>
          <View style={styles.cardWrap}>
            <View style={styles.card}>
              <TouchableOpacity>
                <View style={styles.cardImage}>
                  <View style={styles.cardImageStyle}>
                    {/* <Image
                              source={{uri: item?.parcel_send_receipt}}
                              style={styles.trackParcelImage}
                            /> */}
                    <Text>Image</Text>
                  </View>
                </View>

                <View style={styles.noParcelFile}>
                  <FontAwesome name="file-pdf-o" size={80} color="black" />
                </View>
              </TouchableOpacity>
              <View style={styles.cardContent}>
                <Text style={styles.textStyle}>Invoice : Order05</Text>
                <Text style={styles.textStyle}>Phone Number : 01987132107</Text>
                <Text style={styles.textStyle}>Delivery Status : Success</Text>
                <Text>Address : Dhaka, Bangladesh</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.noParcel}>
          <FontAwesome name="exclamation-circle" size={40} color="red" />
          <Text style={styles.noParcelText}>No matching parcel found</Text>
        </View>
      </View>
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
