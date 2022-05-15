import React, { useContext, useState } from 'react'
import itd from "./css/ItemDetail.module.css"
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

export default function ItemDetail({ productSpecific }) {

    const { addItem } = useContext(GlobalContext);

    let [agregado, setAgregado] = useState(0);

    const onAdd = (quantityToAdd) => {

        setAgregado(quantityToAdd);
        addItem({ ...productSpecific, quantityToAdd })

    }



    return (
        <>

            <div className={itd.gridProducto}>
                <h1 className={itd.nameProd} >{productSpecific.name}</h1>
                <h1 className={itd.precioProd}>${productSpecific.price}</h1>
                <h3 className={itd.infoProd}>{productSpecific.info}</h3>
                <img src={productSpecific.image} alt={productSpecific.name} className={itd.imagenProd} />

                {
                    agregado === 0
                        ? <ItemCount initial={0} stock={productSpecific.stock} onAdd={onAdd} />
                        : <Link to='/cart' className={itd.LinkCart}> <button className={itd.ButtonLinkCart}> Ir a carrito </button> </Link>
                }
            </div>
        </>
    )
}

