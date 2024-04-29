import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { BASE_URL } from '../api/api';
const CartScreen = ({ navigation }) => {
  const [cartData, setCartData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCartData();
  }, []);

  const fetchCartData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/carts/api/cart-list`);
      const responseData = await response.json();
      setCartData(responseData.cart);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView>
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            <>
              {cartData.exist ? (
                <View>
                  {cartData.entries.map((entry, index) => (
                    <View key={index}>
                      <Text>{entry?.product_name}</Text>
                      <Text>Quantity: {entry?.quantity}</Text>
                      <Text>Price: {entry?.price}</Text>
                    </View>
                  ))}
                </View>
              ) : (
                <Text>No items in cart</Text>
              )}
            </>
          )}
        </ScrollView>

        {/* Total Amount */}
        {cartData && (
          <View style={styles.totalAmountContent}>
            <View style={styles.totalAmountInfo}>
              <Text style={styles.totalAmountTitle}>Total Amount : </Text>
            </View>
            <View style={styles.totalAmountRight}>
              <Text style={styles.totalAmountPrice}> ৳ {cartData.total_amount}</Text>
            </View>
          </View>
        )}

        {/* Proceed to Order */}
        <TouchableOpacity onPress={() => navigation.navigate('CheckoutStack')}>
          <View style={styles.proceedOrder}>
            <Text style={styles.proceedOrderTitle}>Proceed to Order</Text>
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

