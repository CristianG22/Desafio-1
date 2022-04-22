import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { customPromiseFind } from '../../utils/customPromises';
import {products} from '../../utils/productos';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {

    const [prod, setProd] = useState({});

    const {detailId} = useParams();

    useEffect(() => {

        customPromiseFind(2000 , products, detailId )
            .then(result => setProd(result))
            .catch(error => console.log(error))
            
    }, [detailId])

    return (

        <>
            <ItemDetail productSpecific={prod} />
        </>
    )
}