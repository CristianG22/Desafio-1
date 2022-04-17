import React, { useState } from 'react'
import "./ItemDetail.css"
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';

export default function ItemDetail  ({ producto }){


    let [agregado, setagregado] = useState(0);

    const onAdd = (quantityToAdd) => {

        setagregado(quantityToAdd);

    }

    return (
        <>

            <div className='gridProducto'>
                <h1 className='nameProd' >{producto.name}</h1>
                <h1 className='precioProd'>{producto.price}</h1>
                <h3>{producto.info}</h3>
                <img src={producto.image} alt={producto.name} className='imagenProd' />

                {
                    agregado === 0 ? <ItemCount initial={0} stock={20} onAdd={onAdd} /> : <Link className='linkCart' to='/cart'> Ir a carrito </Link>

                }

            </div>
        </>
    )
}

