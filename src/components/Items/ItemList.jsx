import React from "react";
import Item from "./Item";

export default function ItemList({ productos }) {

    return (
        <div>
            {productos.map((prod) => {
                return(
                    <Item id={prod.id} nombre={prod.nombre} precio={prod.precio}/>
                )
            })}   
                

        </div>


    )
}