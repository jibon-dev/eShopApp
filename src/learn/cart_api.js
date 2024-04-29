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


const CartScreen = ({navigation}) => {

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

  console.log("cartData :", cartData)
  
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
                    <Cart cartData={cartData} />
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



// const updateQuantity = async (productId, newQuantity) => {
//   try {
//     const response = await fetch(`${BASE_URL}/carts/api/cart-list/`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         product_id: productId,
//         quantity: newQuantity,
//       }),
//     });
//     const responseData = await response.json();
//     if (response.ok) {
//       fetchCartData(); // Update cart data after quantity update
//     } else {
//       console.error('Error updating quantity:', responseData);
//     }
//   } catch (error) {
//     console.error('Error updating quantity:', error);
//   }
// };