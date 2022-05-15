import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import Checkout from "./Checkout"
import chl from "./css/Checkout.module.css";

export default function CheckoutList() {

    const { cart, orderId, clear, cartQuantity, priceTotal } = useContext(GlobalContext);

    const endCheckout = () => {
        clear()
    }

    const cancelCheckout = () => {
        clear()
    }

    return (

        <>
            <div className={chl.flexAll}>
                <div className={chl.flexMessages}>
                    <h1 className={chl.messageCheck}>Gracias por comprar con nosotros!</h1>
                    <p className={chl.tittleCheckoutP}>Su orden de compra es:</p>
                    <h1 className={chl.tittleCheckoutH1}>{orderId}</h1>
                </div>

                <div className={chl.flexboxItems}>
                    {
                        cart.map((prod) => {
                            return (

                                <Checkout key={prod.id} name={prod.name} quantity={prod.quantityToAdd} price={prod.price}
                                    orderId={orderId} priceTotal={priceTotal} cartQuantity={cartQuantity} />
                            )
                        })
                    }
                    <tr>
                        <td></td>
                        <td className={chl.dataChl}>x{cartQuantity}</td>
                        <td className={chl.dataChl}>${priceTotal}</td>
                    </tr>
                </div>
                <div className={chl.flexButtons}>
                    <Link to="/"> <button onClick={() => { cancelCheckout() }} className={chl.buttonCancelCheck}>Cancelar compra</button> </Link>
                    <Link to="/"> <button onClick={() => { endCheckout() }} className={chl.buttonEndCheck}>Finalizar compra</button> </Link>
                </div>

            </div>

        </>
    )
}