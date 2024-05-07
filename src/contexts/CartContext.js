import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../api/api';

export const CartContext = createContext();

export const CartProvider = (props) => {

    const [itemsCount, setItemsCount] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCartData();
    }, []);

    const fetchCartData = async () => {
        try {
            const response = await fetch(`${BASE_URL}/carts/api/cart-list`);
            const responseData = await response.json();
            setItemsCount(responseData.cart.items_count);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };
    

    return (
        <CartContext.Provider
            value={{
                itemsCount,
                loading,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};
