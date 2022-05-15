import React from "react";
import Item from "./Item";
import il from "./css/ItemList.module.css"

export default function ItemList({ productos }) {
    return (

        <div className={il.backgroundClass}>
            <div className={il.ItemListWrapper}>
                <div className={il.ItemList}>
                    <div className={il.ItemList__products}>

                        {productos.map((prod) => {
                            return (
                                <Item key={prod.id} id={prod.id} nombre={prod.name} precio={prod.price} imagen={prod.image} />
                            )
                        })}

                    </div>

                </div>

            </div>
        </div>


    )
}