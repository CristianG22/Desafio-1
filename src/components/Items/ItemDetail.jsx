import React, { useContext, useState } from 'react'
import "./css/ItemDetail.css"
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

export default function ItemDetail({ productSpecific }) {

    const {addItem} = useContext(GlobalContext);

    let [agregado, setAgregado] = useState(0);

    const onAdd = (quantityToAdd) => {

        setAgregado(quantityToAdd);
        addItem ({...productSpecific, quantityToAdd})
        
    }



    return (
        <>

            <div className='gridProducto'>
                <h1 className='nameProd' >{productSpecific.name}</h1>
                <h1 className='precioProd'>{productSpecific.price}</h1>
                <h3>{productSpecific.info}</h3>
                <img src={productSpecific.image} alt={productSpecific.name} className='imagenProd' />

                {
                    agregado === 0 ? <ItemCount initial={0} stock={20} onAdd={onAdd} /> : <Link className='linkCart' to='/cart'> Ir a carrito </Link>

                }

            </div>
        </>
    )
}

