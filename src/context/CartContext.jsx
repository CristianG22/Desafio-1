import React, { createContext, useState } from "react";

export const CartContext = createContext();

let stateAdd;
const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (item) => {

        isInCart(item.id);

        stateAdd === true && item.quantityToAdd > 0 ? setCart([...cart, item]) : console.log("Articulo previamente agregado o la cantidad seleccionada fue 0")


    }

    const removeItem = (id) => {

        setCart(cart.filter((productSpec) => productSpec.id !== id))

    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        cart.find((productoF) => productoF.id === id) ? stateAdd = false : stateAdd = true;
    }

    return (
        <>
            <CartContext.Provider value={{ cart, setCart, addItem, removeItem, clear }}>
                {children}
            </CartContext.Provider>
        </>
    );
};

export default CartContextProvider;
