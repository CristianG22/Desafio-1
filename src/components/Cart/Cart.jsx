import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";


export default function Cart ({id, nombre, precio, imagen, cantidad}) {

    const {removeItem} = useContext(GlobalContext);

    const handleEliminar = () => {
        removeItem(id);
    }

    return (
    <>
        <div>
        <img src={imagen} alt={nombre}  />
        <p>{precio}</p>
        <p>{nombre}</p>
        <p>{cantidad}</p>
        <button onClick={handleEliminar} >Eliminar producto</button>
        </div>
    </>)
}