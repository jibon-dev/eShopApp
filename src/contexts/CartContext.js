import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {

    const [totalQuantity, setTotalQuantity] = useState(0);

    return (
        <CartContext.Provider
            value={{
                totalQuantity,
                setTotalQuantity,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};
