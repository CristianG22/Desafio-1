import React, { useState } from "react";
import "./ItemCount.css";

export default function ItemCount({ initial, stock, onAdd}) {

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
            <div className="AgregCarrito">
                <div className="AgregCarrito__Buttons">
                <button onClick={resta}>-</button>
                <button>{cant}</button>
                <button onClick={suma}>+</button>
                
                </div>
                <button className="AgregCarrito__BAgreg" onClick={handleClick}> Agregar al carrito </button>
            </div>
        </>
    )
}