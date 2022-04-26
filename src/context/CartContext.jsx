import React, { createContext, useState } from "react";

export const CartContext = createContext();

let stateAdd;
const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [cartPrice, setCartPrice] = useState();
    let priceCounter;

    const addItem = (item) => {

        isInCart(item.id);

        if (stateAdd === true && item.quantityToAdd > 0) {
            setCart([...cart, item]);

            let cantidad = item.quantityToAdd;
            console.log(item.price)
            console.log(typeof(item.price)) ;
            console.log(`esto es la cantidad ${cantidad}` )
            let precio = Number(item.price);
            console.log(typeof(precio))
            console.log(precio)


            setCartPrice(priceCounter);
        }
        else {
            console.log("Articulo previamente agregado o la cantidad seleccionada fue 0")
        }

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
            <CartContext.Provider value={{ cart, setCart, addItem, removeItem, clear, cartPrice }}>
                {children}
            </CartContext.Provider>
        </>
    );
};

export default CartContextProvider;
