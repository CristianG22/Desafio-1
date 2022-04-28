import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from "firebase/firestore"


export default function ItemDetailContainer() {

    const [prod, setProd] = useState({});

    const { detailId } = useParams();


    useEffect(() => {
        const db = getFirestore();

        const productSpecific = doc(db, 'products', detailId)
        
        getDoc(productSpecific).then((itemZ) => {
            setProd({ id: itemZ.id, ...itemZ.data() });
        })
    }, [detailId])

    return (

        <>
            <ItemDetail productSpecific={prod} />
        </>
    )
}