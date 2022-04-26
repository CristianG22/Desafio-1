import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function CartList() {

    const { cart, cartQuantity, priceTotal, clear } = useContext(CartContext)

    return (

        <div>
            {
                cartQuantity === 0
                    ? <> <h2>No se encuentran items en el Cart</h2><Link to="/"> Volver al listado</Link> </>
                    : cart.map((prod) => {
                        return (
                            <Cart key={prod.id} id={prod.id} nombre={prod.name} precio={prod.price} imagen={prod.image} cantidad={prod.quantityToAdd} precioTotal={priceTotal} />
                        )
                    })
            }
            {
                cartQuantity === 0
                    ? ""
                    : <> <button onClick={clear}>Terminar compra </button>
                        <h2>{priceTotal}</h2> </>
            }
        </div>

    )
}