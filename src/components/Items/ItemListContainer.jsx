import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"


export default function ItemListContainer() {

    const [items, setItems] = useState([]);

    const { categoryId } = useParams();
    let itemsCollection;


    useEffect(() => {

        const db = getFirestore();

        if (categoryId) {
            const productsFbCategory = query(collection(db, 'products'), where("category", "==", categoryId));

            getDocs(productsFbCategory).then((resp) => {
                itemsCollection = resp.docs.map((itemX) => ({ id: itemX.id, ...itemX.data() }));

                setItems(itemsCollection);
            })
        }
        else {
            const productsFb = collection(db, 'products');

            getDocs(productsFb).then((resp) => {
                itemsCollection = resp.docs.map((itemX) => ({ id: itemX.id, ...itemX.data() }));

                setItems(itemsCollection);
            })
        }

    }, [categoryId])

    return (
        <>
            <ItemList productos={items} />
        </>
    )
}