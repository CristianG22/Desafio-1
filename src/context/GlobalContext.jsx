import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {


    const [cart, setCart] = useState([]);
    let stateAdd;
    const [cartQuantity, setCartQuantity] = useState(0);
    let quantity = 0;
    const [priceTotal, setPriceTotal] = useState(0);
    let money = 0;
    const [orderId, setOrderId] = useState('');


    const addItem = (item) => {

        isInCart(item.id);

        if (stateAdd === true && item.quantityToAdd > 0) {

            setCart([...cart, item]);

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

    const calcQuantity = () => {
        cart.forEach((item) => {
            quantity += item.quantityToAdd;
            
            setCartQuantity(quantity);
        })

        if (quantity === 0)
            setCartQuantity(0);
    }

    useEffect(() => {
        calcQuantity();
        calcTotal();
    }, [cart])


    const calcTotal = () => {
        cart.forEach((item) => {

            let itemPriceXQuant;

            itemPriceXQuant = Number(item.price) * item.quantityToAdd;

            money += itemPriceXQuant;

            setPriceTotal(money);
        })

        if (money === 0)
            setPriceTotal(0);
    }

    return (
        <>
            <GlobalContext.Provider value={{ cart, setCart, addItem, removeItem, clear, cartQuantity, priceTotal, setOrderId, orderId }}>
                {children}
            </GlobalContext.Provider>
        </>
    );
};

export default GlobalContextProvider;
