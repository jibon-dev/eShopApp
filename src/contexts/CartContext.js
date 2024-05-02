import React, { createContext, useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../api/api';
export const CartContext = createContext();

export const CartProvider = (props) => {

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
        infoAlert('Error fetching cart data:', error);
        }
    };

  // IncreaseQuantity Function =========================================
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
        infoAlert('Quantity Increased', 'Quantity has been increased successfully.');
        fetchCartData();
      } else {
        const responseData = await response.json();
        infoAlert('Sorry !', responseData.msg);
      }
    } catch (error) {
      infoAlert('Quantity Increased', error);
    }
  };

  // Decrease Function =================================================
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
        infoAlert('Quantity Decreased', 'Quantity has been decreased successfully.');
        fetchCartData();
      } else {
        infoAlert('Error:', 'Failed to decrease quantity. Please try again later.');
      }
    } catch (error) {
      // Handle error
      infoAlert('Error decreasing quantity:', error);
    }
  };

  // RemoveItemFromCart Function =======================================
  const handleRemoveItemFromCart = async (itemId) => {
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
      if (response.ok) {
        // infoAlert('Item Removed', responseData.msg);
        fetchCartData();
      }
    } catch (error) {
      // Handle error
      infoAlert('Error removing item:', error);
    }
  };

  // Custom Message =====================================================
  const infoAlert = (title, message, itemId) => {
    Alert.alert(title, message, [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => handleRemoveItemFromCart(itemId),
      },
    ]);
  };

  return (
    <CartContext.Provider
      value={{
        cartData,
        loading,
        fetchCartData,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        handleRemoveItemFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
