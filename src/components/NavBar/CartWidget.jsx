import React from "react";
import { Link } from "react-router-dom";
import { FaGuitar } from "react-icons/fa";
import isvg from "./css/IconSVG.module.css";


export default function CartWidget({ quantity }) {
    return (
        <>
            <div className={isvg.divWidget}>
                <Link to="/cart">
                    <FaGuitar className={isvg.iconSVGBuy} />
                    <p className={isvg.quantityIcon}>{quantity}</p>
                </Link>

            </div>

        </>
    );
}

