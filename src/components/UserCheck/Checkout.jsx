import React from "react";
import c from "./css/Checkout.module.css"

export default function Checkout ({name,quantity,price,cartQuantity,priceTotal}) {

    return (

        <>
        <tr className={c.lineDataCheck}>
            <td className={c.dataCheck}>{name}</td>
            <td className={c.dataCheck}>x{quantity}</td>
            <td className={c.dataCheck}>${price*quantity}</td>
        </tr>
        </>
    )

}