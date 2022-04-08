import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import "./ItemCount.css";

export default function ItemCount({ initial, stock}) {

    let [cant, setCant] = useState(initial);

    const suma = () => {

        if (cant < stock)
            setCant(++cant);
    }

    const resta = () => {

        if (cant > initial)
            setCant(--cant);
    }

    const agregar = () => {

        if (stock > 0)
            setCant(initial);
            alert(cant);
    }

    return (
        <>
            <div className="AgregCarrito">
                <h1 style={{textAlign : "center"}}>Item Count</h1>

                <div className="AgregCarrito__Buttons">
                <Button variant="contained" color="error" onClick={resta}> <RemoveIcon /> </Button>
                <Button>{cant}</Button>
                <Button variant="contained" color="success" onClick={suma}> <AddIcon /> </Button>
                
                </div>
                <Button variant="contained" onClick={agregar}> Agregar al carrito </Button>
            </div>
        </>
    )
}