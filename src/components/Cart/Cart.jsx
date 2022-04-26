import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";


export default function Cart ({id, nombre, precio, imagen, cantidad}) {

    const {removeItem} = useContext(CartContext);

    const handleEliminar = () => {
        removeItem(id);
    }

    return (
    <>
        <div>
        <img src={imagen} alt={nombre}  />
        <p>{precio}</p>
        <p>{imagen}</p>
        <p>{cantidad}</p>
        <button onClick={handleEliminar} >Eliminar producto</button>
        </div>
    </>)
}