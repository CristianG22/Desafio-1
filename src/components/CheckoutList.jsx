import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import Checkout from "./Checkout";

export default function CheckoutList() {

    const { cart, orderId, clear } = useContext(GlobalContext);

    const endCheckout = () => {

        clear()
    }

    return (

        <>
            <div>
                <h1>Su orden de compra es {orderId}</h1>

                {
                    cart.map((prod) => {
                        return (

                            <Checkout key={prod.id} name={prod.name} quantity={prod.quantityToAdd} price={prod.price} orderId={orderId} />
                        )
                    })
                }
                <Link to="/"> <button onClick={() => { endCheckout() }}>Finalizar compra</button> </Link>
            </div>
        </>
    )
}