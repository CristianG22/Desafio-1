import React from "react";
import Item from "./Item";

export default function ItemList({ productos }) {

    return (
        <div>
            {productos.map((prod) => {
                return(
                    <Item key={prod.id} nombre={prod.nombre} precio={prod.precio} imagen={prod.imagen}/>
                )
            })}   
                

        </div>


    )
}