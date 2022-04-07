import React, { useEffect, useState } from "react"
import customPromise from "../../utils/customPromises";
import productos from "../../utils/productos";
import ItemList from "./ItemList";

export default function ItemListContainer() {


    const [items, setItems] = useState([]);

    useEffect(() => {

        customPromise(3000,productos)
            .then(resultado => setItems(resultado))
            .catch(error => console.log(error))

    }, [])

    return (
        <>
        <ItemList productos={items}/>
        </>
    )
}