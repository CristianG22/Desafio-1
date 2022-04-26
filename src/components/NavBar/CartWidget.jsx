import React from "react";
import { Link } from "react-router-dom";
import { FaGuitar } from "react-icons/fa";
import "./iconSVG.css";
import { IconContext } from "react-icons";

export default function CartWidget({quantity}) {
    return (
        <>
            <IconContext.Provider value={{ className: 'iconSVGBuy' }}>

                <Link to="/cart"><FaGuitar className="iconSVGBuy"/></Link>
                <p>{quantity}</p>

            </IconContext.Provider>

        </>
    );
}

