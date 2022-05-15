import React, { useState } from "react";
import ic from "./css/ItemCount.module.css";


export default function ItemCount({ initial, stock, onAdd }) {


    let [cant, setCant] = useState(initial);

    const suma = () => {

        if (cant < stock)
            setCant(++cant);
    }

    const resta = () => {

        if (cant > initial)
            setCant(--cant);
    }

    const handleClick = () => {
        onAdd(cant);
    }

    return (
        <>
            <div className={ic.AgregCarrito}>
                <div className={ic.AgregCarrito__Buttons}>
                    <p onClick={resta} className={ic.RestButton}>-</p>
                    <p className={ic.QuantityItems}>{cant}</p>
                    <p onClick={suma} className={ic.PlusButton}>+</p>
                </div>
                <button className={ic.AgregCarrito__BAgreg} onClick={handleClick}> Agregar al carrito </button>
            </div>
        </>
    )
}