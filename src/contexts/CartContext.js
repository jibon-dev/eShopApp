import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../api/api';

export const CartContext = createContext();

export const CartProvider = (props) => {

    const [totalQuantity, setTotalQuantity] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetchCartTotalQuantity();
        }, 3000);
    }, []);
    

    const fetchCartTotalQuantity = async () => {
        try {
            const response = await fetch(`${BASE_URL}/carts/api/cart-count`);
            const data = await response.json();
            setTotalQuantity(data.total_quantity);
            setLoading(false);
        }
        catch (error) {
            console.error('Error fetching cart data:', error);
            setLoading(false);
        }
    };
    

    return (
        <CartContext.Provider
            value={{
                totalQuantity,
                loading,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};
