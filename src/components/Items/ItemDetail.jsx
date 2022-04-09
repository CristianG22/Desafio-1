import React from 'react'

const ItemDetail =  ({producto}) => {


    const {id,nombre,precio} = producto;

    console.log(producto);
    return (
        <>

        <div>
            <h1>{id}</h1>
            <h2>{nombre}</h2>
            <h3>{precio}</h3>
        </div>
        
        </>
    )
}

export default ItemDetail