import React, { useContext } from "react";
import Cart from "./Cart";
import { GlobalContext } from "../../context/GlobalContext";
import { Link } from "react-router-dom";
import cl from "./css/CartList.module.css";

export default function CartList() {

    const { cart, cartQuantity, priceTotal } = useContext(GlobalContext)

    return (

        <div className={cl.flexboxCL}>
            {
                cartQuantity === 0
                    ? <>
                        <div className={cl.flexboxNotFound}>
                            <h2 className={cl.notFound}>No se encuentran items en el carrito</h2>
                            <Link to="/" ><button className={cl.notFoundLink}> Volver al listado </button></Link>
                        </div>
                    </>
                    : <>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th></th>
                                    <th>Total Item</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((prod) => {
                                        return (
                                            <Cart key={prod.id} id={prod.id} nombre={prod.name} precio={prod.price} imagen={prod.image} cantidad={prod.quantityToAdd} precioTotal={priceTotal} />
                                        )
                                    })
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>{cartQuantity}</td>
                                    <td></td>
                                    <td></td>
                                    <td>{priceTotal}</td>
                                </tr>
                            </tfoot>
                        </table>


                        <Link to="/register"> <button className={cl.buttonProceed}> Proceder a checkout </button> </Link>
                    </>
            }
        </div>

    )
}