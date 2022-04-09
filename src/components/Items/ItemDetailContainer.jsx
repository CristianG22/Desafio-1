import React, { useEffect, useState } from 'react';
import customPromise from '../../utils/customPromises';
import {producto} from '../../utils/productos';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {

    const [prod, setProd] = useState({});

    useEffect(() => {

        customPromise(4000 , producto)
            .then(result => setProd(result))
            .catch(error => console.log(error))

    }, [])


    return (

        <>
            <ItemDetail producto={prod} />
        </>
    )
}