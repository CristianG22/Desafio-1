import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import c from "./css/Cart.module.css";
import {BsTrash} from 'react-icons/bs';

export default function Cart({ id, nombre, precio, imagen, cantidad }) {

    const { removeItem } = useContext(GlobalContext);

    const handleEliminar = () => {
        removeItem(id);
    }
    console.log(typeof (cantidad)
    )
    console.log(typeof (precio)
    )
    return (
        <>
            <tr>
                <td><img src={imagen} alt={nombre} className={c.infoImage} /></td>
                <td><p className={c.infoName}>{nombre}</p></td>
                <td><p className={c.infoQuantity}>{cantidad}</p></td>
                <td><p className={c.infoPrice}>${precio}</p></td>
                <td><BsTrash onClick={handleEliminar} className={c.buttonDelete}>Eliminar producto</BsTrash></td>
                <td><p className={c.infoTotalProduct}>${cantidad * precio}</p></td>
            </tr>

        </>)
}