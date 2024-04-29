import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Cart from '../components/Cart/Cart';

const CartScreen = ({navigation}) => {
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView>
          <Cart />
        </ScrollView>

        {/*Total Amount*/}
        <View style={styles.totalAmountContent}>
          <View style={styles.totalAmountInfo}>
            <Text style={styles.totalAmountTitle}>Total Amount : </Text>
          </View>
          <View style={styles.totalAmountRight}>
            <Text style={styles.totalAmountPrice}> ৳ 100</Text>
          </View>
        </View>
        {/*Proceed to Order*/}
        <TouchableOpacity onPress={() => navigation.navigate('CheckoutStack')}>
          <View style={styles.proceedOrder}>
            <Text style={styles.proceedOrderTitle}>Proceed to Order </Text>
          </View>
        </TouchableOpacity>
      </View>
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
  totalAmountContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    backgroundColor: '#293352',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 6,
    borderRadius: 8,
    overflow: 'hidden',
    color: '#FFF',
    paddingBottom: 7,
  },
  totalAmountInfo: {
    flex: 1,
    color: '#FFF',
  },
  totalAmountTitle: {
    color: '#FFF',
  },
  totalAmountRight: {
    flex: 1,
    justifyCenter: 'flex-end',
    alignItems: 'flex-end',
  },
  totalAmountPrice: {
    color: '#FFF',
  },

  proceedOrder: {
    padding: 10,
    backgroundColor: '#E04F54',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  proceedOrderTitle: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default CartScreen;
