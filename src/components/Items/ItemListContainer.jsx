import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { customPromiseFilter } from "../../utils/customPromises";
import { products } from "../../utils/productos";
import ItemList from "./ItemList";


export default function ItemListContainer() {

    const [items, setItems] = useState([]);

    const {categoryId} = useParams ();


    useEffect(() => {

        customPromiseFilter(500, products, categoryId)
            .then(resultado => setItems(resultado))
            .catch(error => console.log(error))

    }, [categoryId])

    return (
        <>



            <ItemList productos={items} />

        </>
    )
}