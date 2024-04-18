import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Brand = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* main content */}
      <View style={styles.brandCard}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductListStack')}>
          <Image
            source={require('../../assets/icon/no-photo.png')}
            resizeMode={'contain'}
            style={styles.brandCardImage}
          />
          <Text style={styles.brandCardOfferTitle}>up to 67 %</Text>
          <View style={styles.brandCardContent}>
            <Text style={styles.brandCardTitle}>Huawei</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* main content */}
      <View style={styles.brandCard}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductListStack')}>
          {/* <Image source={{uri: brand.image}} style={styles.brandCardImage} /> */}
          <Image
            source={require('../../assets/icon/no-photo.png')}
            resizeMode={'contain'}
            style={styles.brandCardImage}
          />
          <Text style={styles.brandCardOfferTitle}>up to 67 %</Text>
          <View style={styles.brandCardContent}>
            <Text style={styles.brandCardTitle}>Huawei</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* main content */}
      <View style={styles.brandCard}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductListStack')}>
          {/* <Image source={{uri: brand.image}} style={styles.brandCardImage} /> */}
          <Image
            source={require('../../assets/icon/no-photo.png')}
            resizeMode={'contain'}
            style={styles.brandCardImage}
          />
          <Text style={styles.brandCardOfferTitle}>up to 67 %</Text>
          <View style={styles.brandCardContent}>
            <Text style={styles.brandCardTitle}>Huawei</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* no content */}
      {/* <View style={styles.noBrand}>
        <Text style={styles.searchValueTitle}>yy</Text>
        <Text>Sorry, No Brand Found</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  brandCard: {
    marginTop: 5,
    width: '30%',
    backgroundColor: '#FFF',
    borderRadius: 7,
    overflow: 'hidden',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 5,
    marginVertical: 10,
    color: '#000',
  },
  brandCardImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  brandCardOfferTitle: {
    position: 'absolute',
    color: '#FFF',
    backgroundColor: 'red',
    padding: 2,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-end',
    fontSize: 12,
  },
  brandCardContent: {
    justifyCenter: 'center',
    alignItems: 'center',
    margin: 5,
  },
  brandCardTitle: {
    fontSize: 12,
    color: '#000',
  },
  noBrand: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  searchValueTitle: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
});

export default Brand;
