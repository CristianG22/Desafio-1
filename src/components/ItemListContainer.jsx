import React from "react"
import ItemCount from "./ItemCount";

export default function ItemListContainer() {

    function onAdd (cantidad) {
        alert(cantidad);
    }

    return (
        <>
            <ItemCount initial= {1} stock= {20}  onAdd={onAdd}  />
        </>
    )
}