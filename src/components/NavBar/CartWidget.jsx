import React from "react";
import { Link } from "react-router-dom";
import { FaGuitar } from "react-icons/fa";
import "./iconSVG.css";
import { IconContext } from "react-icons";

export default function CartWidget() {
    return (
        <>
            <IconContext.Provider value={{ className: 'iconSVGBuy' }}>

                <Link to="/cart"><FaGuitar className="iconSVGBuy"/></Link>
                <p>(5)</p>

            </IconContext.Provider>

        </>
    );
}

