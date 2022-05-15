import React from 'react'
import { Link } from 'react-router-dom'
import it from "./css/Item.module.css"

export default function Item({ id, nombre, precio, imagen }) {


    return (
        <>
            <div className={it.cardItem} >
                <img src={imagen} alt={nombre} className={it.imgCard} />
                <div className={it.SpaceInfo}>
                    <p className={it.infoName}>{nombre}</p>
                    <p className={it.InfoPrice}>${precio}</p>
                    <button className={it.ButtonCard}> <Link to={`/detail/${id}`} className={it.LinkCard}>Ver detalle</Link> </button>
                </div>
            </div>


        </>
    )
}
