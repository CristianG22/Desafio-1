import React from 'react'


export default function Item(id, nombre, precio) {


    return (
        <>
            <div key={id}>
            <h1>{nombre}</h1>
            <h1>{precio}</h1>
            <h1>hola</h1>
            </div>
        
        </>
    )
}
