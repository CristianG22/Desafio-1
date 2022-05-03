import React, { useContext } from "react";
import Cart from "./Cart";
import { GlobalContext } from "../../context/GlobalContext";
import { Link } from "react-router-dom";

export default function CartList() {

    const { cart, cartQuantity, priceTotal } = useContext(GlobalContext)

    console.log(cart)
    return (

        <div>
            {
                cartQuantity === 0
                    ? <> <h2>No se encuentran items en el Cart</h2><Link to="/"> Volver al listado</Link> </>
                    : <>
                    {
                        cart.map((prod) => {
                            return (
                                <Cart key={prod.id} id={prod.id} nombre={prod.name} precio={prod.price} imagen={prod.image} cantidad={prod.quantityToAdd} precioTotal={priceTotal} />
                            )
                        })
                    }
                        <Link to="/register"> <button> Proceder a checkout </button> </Link>
                        <h2>{priceTotal}</h2>
                    </>
            }
        </div>

    )
}