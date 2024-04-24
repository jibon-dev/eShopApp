import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const HotDeals = ({hotDeals, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.hotDealContent}>
        {hotDeals.map((item, index) => (
          <View style={styles.box} key={index}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProductDetailStack', {
                  screen: 'ProductDetail',
                  product: item,
                })
              }>
                {
                  item.image?(
                    <Image source={{uri: item.image}} style={styles.hotItemImage} />
                  ):
                  (
                    <Image source={require('../../assets/icon/no-photo.png')} style={styles.hotItemImage} resizeMode={'contain'}/>
                  )
                }
            </TouchableOpacity>
          </View>
        ))}
        <View style={styles.box}>
          <View style={styles.readMore}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProductListStack', {
                  screen: 'ProductList',
                  params: {query: 'product-offer/offer'},
                })
              }>
              <Text style={{fontWeight: 'bold'}}>More Deals</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  hotDealContent: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '23%',
    borderRadius: 10,
    elevation: 2,
    backgroundColor: '#FFF',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 3,
    marginVertical: 3,
  },
  hotItemImage: {
    width: '100%',
    height: 80,
    borderRadius: 10,
  },
  readMore: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HotDeals;