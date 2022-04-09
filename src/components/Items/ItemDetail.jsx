import React from 'react'
import ItemCount from './ItemCount'
import "./ItemDetail.css"

const ItemDetail =  ({producto}) => {



    return (
        <>

        <div className='gridProducto'>
            <h1  style={{gridArea : "info1"} }>{producto.nombre}</h1>
            <p style={{gridArea : "info1 " , alignSelf : "center"}} >{producto.descripcion}</p>
            <h1  style={{gridArea : "info1 " , alignSelf : "end" , justifySelf : "center"}}>{producto.precio}</h1>
            <img src={producto.imagen}  alt={producto.nombre} className='imagenProd' />
        </div>
        
        </>
    )
}

export default ItemDetail