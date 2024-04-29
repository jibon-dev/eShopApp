
import React, {useEffect, useState} from 'react';
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
import Loader from '../components/Loader/loader';
import EmptyCart from '../components/Cart/EmptyCart';
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

  const updateQuantity = async (productId, newQuantity) => {
    try {
      // Optimistic UI update: Update quantity immediately
      const updatedCartData = { ...cartData };
      const updatedEntries = updatedCartData.entries.map((entry) => {
        if (entry.product_id === productId) {
          entry.quantity = newQuantity;
        }
        return entry;
      });
      updatedCartData.entries = updatedEntries;
      setCartData(updatedCartData);

      // Call API to update quantity
      const response = await fetch(`${BASE_URL}/carts/api/cart-list`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: productId,
          quantity: newQuantity,
        }),
      });
      const responseData = await response.json();
      if (responseData.msg) {
        console.log(responseData.msg);
        fetchCartData(); // Refresh cart data after updating quantity
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
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
                      <Text>{entry?.title}</Text>
                      <Text>Quantity: {entry?.quantity}</Text>
                      <Text>Price: {entry?.price}</Text>
                      <TouchableOpacity onPress={() => updateQuantity(entry.product_id, entry.quantity + 1)}>
                        <Text>Increase Quantity</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => updateQuantity(entry.product_id, entry.quantity - 1)}>
                        <Text>Decrease Quantity</Text>
                      </TouchableOpacity>
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
              <Text style={styles.totalAmountPrice}> ৳ {cartData.total_cost}</Text>
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

