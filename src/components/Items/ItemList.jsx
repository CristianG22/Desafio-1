import React from "react";
import Item from "./Item";
import "./css/ItemList.css"

export default function ItemList({ productos }) {
    return (

        <div className="ItemListWrapper">
            <div className="ItemList">
                <div className="ItemList__products">

                    {productos.map((prod) => {
                        return (
                            <Item key={prod.id} id={prod.id} nombre={prod.name} precio={prod.price} imagen={prod.image} />
                        )
                    })}

                </div>

            </div>

        </div>

    )
}