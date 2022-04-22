import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"

export default function Item({ id, nombre, precio, imagen }) {


    return (
        <>
            <div className="cardItem" >
                <img src={imagen} alt={nombre} className="imgCard" />
                <p style={{ textAlign: "center", fontSize: "1.5rem" }}>{nombre}</p>
                <p style={{ textAlign: "center", }}>{precio}</p>
                <Link to={`/detail/${id}`} className="linkCard">Ver detalle</Link>
            </div>


        </>
    )
}
