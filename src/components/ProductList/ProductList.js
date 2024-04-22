import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from 'react-native';

const ProductList = ({navigation}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.productCard}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetailStack')}>
            <Image
              source={require('../../assets/icon/no-photo.png')}
              resizeMode={'contain'}
              style={styles.productCardImage}
            />

            <View style={styles.productCardContent}>
              <Text style={styles.productCardTitle}>product Name</Text>
              <Text style={styles.offerMessage}>89 % off</Text>
              {/* <Text style={styles.outOfStockMessage}>Out of Stock</Text> */}

              <View style={styles.productPriceContent}>
                <Text style={styles.bdtSymbol}>৳</Text>
                <Text style={styles.productOldPrice}>300</Text>
                <Text style={styles.productNewPrice}>400</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.productCard}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetailStack')}>
            <Image
              source={require('../../assets/icon/no-photo.png')}
              resizeMode={'contain'}
              style={styles.productCardImage}
            />

            <View style={styles.productCardContent}>
              <Text style={styles.productCardTitle}>product Name</Text>
              <Text style={styles.offerMessage}>89 % off</Text>
              {/* <Text style={styles.outOfStockMessage}>Out of Stock</Text> */}

              <View style={styles.productPriceContent}>
                <Text style={styles.bdtSymbol}>৳</Text>
                <Text style={styles.productOldPrice}>300</Text>
                <Text style={styles.productNewPrice}>400</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.productCard}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetailStack')}>
            <Image
              source={require('../../assets/icon/no-photo.png')}
              resizeMode={'contain'}
              style={styles.productCardImage}
            />

            <View style={styles.productCardContent}>
              <Text style={styles.productCardTitle}>product Name</Text>
              <Text style={styles.offerMessage}>89 % off</Text>
              {/* <Text style={styles.outOfStockMessage}>Out of Stock</Text> */}

              <View style={styles.productPriceContent}>
                <Text style={styles.bdtSymbol}>৳</Text>
                <Text style={styles.productOldPrice}>300</Text>
                <Text style={styles.productNewPrice}>400</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.productCard}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetailStack')}>
            <Image
              source={require('../../assets/icon/no-photo.png')}
              resizeMode={'contain'}
              style={styles.productCardImage}
            />

            <View style={styles.productCardContent}>
              <Text style={styles.productCardTitle}>product Name</Text>
              <Text style={styles.offerMessage}>89 % off</Text>
              {/* <Text style={styles.outOfStockMessage}>Out of Stock</Text> */}

              <View style={styles.productPriceContent}>
                <Text style={styles.bdtSymbol}>৳</Text>
                <Text style={styles.productOldPrice}>300</Text>
                <Text style={styles.productNewPrice}>400</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.productCard}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetailStack')}>
            <Image
              source={require('../../assets/icon/no-photo.png')}
              resizeMode={'contain'}
              style={styles.productCardImage}
            />

            <View style={styles.productCardContent}>
              <Text style={styles.productCardTitle}>product Name</Text>
              <Text style={styles.offerMessage}>89 % off</Text>
              {/* <Text style={styles.outOfStockMessage}>Out of Stock</Text> */}

              <View style={styles.productPriceContent}>
                <Text style={styles.bdtSymbol}>৳</Text>
                <Text style={styles.productOldPrice}>300</Text>
                <Text style={styles.productNewPrice}>400</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.productCard}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetailStack')}>
            <Image
              source={require('../../assets/icon/no-photo.png')}
              resizeMode={'contain'}
              style={styles.productCardImage}
            />

            <View style={styles.productCardContent}>
              <Text style={styles.productCardTitle}>product Name</Text>
              <Text style={styles.offerMessage}>89 % off</Text>
              {/* <Text style={styles.outOfStockMessage}>Out of Stock</Text> */}

              <View style={styles.productPriceContent}>
                <Text style={styles.bdtSymbol}>৳</Text>
                <Text style={styles.productOldPrice}>300</Text>
                <Text style={styles.productNewPrice}>400</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.productCard}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetailStack')}>
            <Image
              source={require('../../assets/icon/no-photo.png')}
              resizeMode={'contain'}
              style={styles.productCardImage}
            />

            <View style={styles.productCardContent}>
              <Text style={styles.productCardTitle}>product Name</Text>
              <Text style={styles.offerMessage}>89 % off</Text>
              {/* <Text style={styles.outOfStockMessage}>Out of Stock</Text> */}

              <View style={styles.productPriceContent}>
                <Text style={styles.bdtSymbol}>৳</Text>
                <Text style={styles.productOldPrice}>300</Text>
                <Text style={styles.productNewPrice}>400</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.productCard}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetailStack')}>
            <Image
              source={require('../../assets/icon/no-photo.png')}
              resizeMode={'contain'}
              style={styles.productCardImage}
            />

            <View style={styles.productCardContent}>
              <Text style={styles.productCardTitle}>product Name</Text>
              <Text style={styles.offerMessage}>89 % off</Text>
              {/* <Text style={styles.outOfStockMessage}>Out of Stock</Text> */}

              <View style={styles.productPriceContent}>
                <Text style={styles.bdtSymbol}>৳</Text>
                <Text style={styles.productOldPrice}>300</Text>
                <Text style={styles.productNewPrice}>400</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.productCard}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetailStack')}>
            <Image
              source={require('../../assets/icon/no-photo.png')}
              resizeMode={'contain'}
              style={styles.productCardImage}
            />

            <View style={styles.productCardContent}>
              <Text style={styles.productCardTitle}>product Name</Text>
              <Text style={styles.offerMessage}>89 % off</Text>
              {/* <Text style={styles.outOfStockMessage}>Out of Stock</Text> */}

              <View style={styles.productPriceContent}>
                <Text style={styles.bdtSymbol}>৳</Text>
                <Text style={styles.productOldPrice}>300</Text>
                <Text style={styles.productNewPrice}>400</Text>
              </View>
            </View>
          </TouchableOpacity>
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
    marginTop: 15,
  },
  productCard: {
    width: '31%',
    backgroundColor: '#FFF',
    color:"#000",
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
    marginHorizontal: 4,
    marginVertical: 6,
  },
  productCardImage: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    overflow: 'hidden',
  },
  productCardOfferTitle: {
    position: 'absolute',
    color: '#FFF',
    padding: 2,
    borderRadius: 5,
    overflow: 'hidden',
    textAlign: 'center',
    alignSelf: 'flex-end',
  },
  productCardContent: {
    margin: 5,
    borderRadius: 7,
  },

  productCardTitle: {
    fontSize: 12,
    height: 45,
    color:"#000"
  },
  productPriceContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },

  bdtSymbol: {
    marginRight: 4,
    fontSize: 11,
  },
  productNewPrice: {
    fontSize: 11,
  },
  productOldPrice: {
    fontSize: 11,
    marginRight: 5,
    color: 'red',
    textDecorationLine: 'line-through',
  },
  noProductFound: {
    flex: 1,
    flexWrap: 'wrap',
    ...Platform.select({
      ios: {
        marginBottom: '0%',
      },
      android: {
        marginBottom: 0,
      },
    }),
    marginVertical: 100,
    margin: 10,
  },

  outOfStockMessage: {
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: '#E04F54',
    color: '#FFF',
    borderRadius: 4,
    overflow: 'hidden',
    paddingBottom: 1,
    fontSize: 12,
    width: 100,
    marginTop: 3,
  },

  offerMessage: {
    alignSelf: 'center',
    textAlign: 'center',
    color: '#FFF',
    backgroundColor: 'black',
    ...Platform.select({
      ios: {
        borderRadius: 5,
      },
      android: {
        borderRadius: 10,
      },
    }),
    overflow: 'hidden',
    paddingBottom: 1,
    fontSize: 12,
    width: 70,
    marginTop: 4,
  },

  available: {
    overflow: 'hidden',
    paddingBottom: 0,
    marginTop: 0,
  },
  profileImage: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ccccca',
    marginBottom: 10,
  },

  backButton: {
    padding: 7,
    backgroundColor: '#183153',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 8,
    fontWeight: 'bold',
    borderColor: '#183153',
    color: '#FFF',
    overflow: 'hidden',
  },
});

export default ProductList;
