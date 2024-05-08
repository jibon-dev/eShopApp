import React, { createContext, useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../api/api';
export const CartContext = createContext();


export const CartProvider = (props) => {

    const [cartItem, setCartItem] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetchCartTotalQuantity();
    }, []);

    // Get total cart count =====================
    const fetchCartTotalQuantity = async () => {
        try {
            const response = await fetch(`${BASE_URL}/carts/api/cart-count`);
            const data = await response.json();
            // setTotalQuantity(data.cart.items_count);
            setTotalQuantity(data.total_quantity);
            setLoading(false);
        }
        catch (error) {
            console.error('Error fetching cart data:', error);
            setLoading(false);
        }
    };

    const [fetchedState,setFetchedState]=useState(null);
    console.log("Fetch Data : ================ ", fetchedState)
    useEffect(() => {
        setFetchedState('loading')
        setTimeout(()=>getData(),3000);
    },[])

    const getData=async()=>{
        try{
          const response=await fetch(`${BASE_URL}/carts/api/cart-list`);
          const data=await response.json();
          setFetchedState(data)
        }
        catch(error){
          console.log(error)
        }
        finally{
          setFetchedState(null);
        }
      }


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


const [totalQuantity, setTotalQuantity] = useState(0);
const [loading, setLoading] = useState(false);

console.log("Total Quantity :", totalQuantity)
useEffect(() => {
    fetchCartTotalQuantity();
}, [totalQuantity]);

const fetchCartTotalQuantity = async () => {
    setLoading(true);
    try {
        const response = await fetch(`${BASE_URL}/carts/api/cart-count`);
        const data = await response.json();
        setTotalQuantity(data.total_quantity);
        setLoading(false);
    } catch (error) {
        console.error('Error fetching cart data:', error);
        setLoading(false);
    }
};