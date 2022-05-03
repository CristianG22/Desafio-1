import React from "react";

export default function Checkout ({name,quantity,price}) {

    return (

        <>
        <p>{name}</p>
        <p>{price*quantity}</p>
        <p>{quantity}</p>
        </>
    )

}