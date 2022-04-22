import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";

export default function CartList() {

    const { cart } = useContext(CartContext)

    console.log(cart)
    return (

        <div>

        {cart.map((prod) => {
            return (
                <Cart key={prod.id} id={prod.id} nombre={prod.name} precio={prod.price} imagen={prod.image} cantidad={prod.quantityToAdd}/>
            )
        })}

    </div>

    )
}