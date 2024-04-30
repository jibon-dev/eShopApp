
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Cart from '../components/Cart/Cart';
import Loader from '../components/Loader/loader';
import EmptyCart from '../components/Cart/EmptyCart';
import { BASE_URL } from '../api/api';


const CartScreen = ({ navigation }) => {
  const [cartData, setCartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  console.log("CartData ============================ :", cartData)


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

  const handleIncreaseQuantity = async (productId) => {
    try {
      const response = await fetch(`${BASE_URL}/carts/api/cart-list/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: productId,
          increase: true,
        }),
      });
      if (response.ok) {
        // Quantity increased successfully
        Alert.alert('Quantity Increased', 'Quantity has been increased successfully.');
        fetchCartData()
      } else {
        // Handle unsuccessful response
        Alert.alert('Error', 'Failed to increase quantity. Please try again later.');
      }
    } catch (error) {
      // Handle error
      console.error('Error increasing quantity:', error);
      Alert.alert('Error', 'An error occurred while increasing quantity. Please try again later.');
    }
  };


  const handleDecreaseQuantity = async (productId) => {
    try {
      const response = await fetch(`${BASE_URL}/carts/api/cart-list/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: productId,
          decrease: true,
        }),
      });
      if (response.ok) {
        // Quantity decreased successfully
        Alert.alert('Quantity Decreased', 'Quantity has been decreased successfully.');
        fetchCartData(); // Optionally, you can refresh the cart data here
      } else {
        // Handle unsuccessful response
        Alert.alert('Error', 'Failed to decrease quantity. Please try again later.');
      }
    } catch (error) {
      // Handle error
      console.error('Error decreasing quantity:', error);
      Alert.alert('Error', 'An error occurred while decreasing quantity. Please try again later.');
    }
  };
  
 
 
  const removeItem = async (itemId) => {
    try {
      const response = await fetch(`${BASE_URL}/carts/api/cart-remove/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: itemId,
        }),
      });
      const responseData = await response.json();
      if (responseData.detail === "Item removed successfully") {
        fetchCartData();
      }
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      {loading ? (
            <Loader/>
          ) : 
          (
            <>
              {cartData.exist ? (
                <View style={styles.container}>
                  <ScrollView>
                    <Cart 
                    cartData={cartData}
                    removeItem={removeItem}
                    handleIncreaseQuantity={handleIncreaseQuantity}
                    handleDecreaseQuantity={handleDecreaseQuantity}
                    
                    />
                  </ScrollView>
      
                  {/* Total Amount ===================*/}
                  <View style={styles.totalAmountContent}>
                    <View style={styles.totalAmountInfo}>
                      <Text style={styles.totalAmountTitle}>Total Amount : </Text>
                    </View>
                    <View style={styles.totalAmountRight}>
                      <Text style={styles.totalAmountPrice}> ৳ {cartData?.total_cost}</Text>
                    </View>
                  </View>
                  {/*Proceed to Order*/}
                  <TouchableOpacity onPress={() => navigation.navigate('CheckoutStack')}>
                    <View style={styles.proceedOrder}>
                      <Text style={styles.proceedOrderTitle}>Proceed to Order </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                ):
                (
                  <View style={styles.container}>
                    <EmptyCart navigation={navigation} />
                  </View>
                )
              }
            </>
          )
        }
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

