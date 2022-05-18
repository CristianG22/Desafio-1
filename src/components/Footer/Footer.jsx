import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineFacebook, AiOutlineClockCircle } from 'react-icons/ai';

import f from "./css/Footer.module.css"

export default function Footer() {


    return (

        <>
            <div className={f.backgroundF}>
                <div className={f.gridF}>
                    <div className={f.linksF}>
                        <Link to='/' className={f.pLittleF}>Inicio</Link>
                        <Link to='/category/electricas' className={f.pLittleF}>Eléctricas</Link>
                        <Link to='/category/acusticas' className={f.pLittleF}>Acústicas</Link>
                    </div>
                    <div className={f.socialsF}>
                        <h1 className={f.tittleF}>Encontranos en nuestras redes sociales!</h1>
                        <p className={f.pLittleF}>WhatsApp <AiOutlineWhatsApp className={f.iconW} /></p>
                        <p className={f.pLittleF}>Instagram <AiOutlineInstagram className={f.iconI} /></p>
                        <p className={f.pLittleF}>Facebook <AiOutlineFacebook className={f.iconF} /></p>
                    </div>
                    <div className={f.timesF}>
                        <h1 className={f.tittleF}>Horarios <AiOutlineClockCircle className={f.iconC} /></h1>
                        <p className={f.pLittleF}>Lunes - Miércoles de 08:00 a 20:00</p>
                        <p className={f.pLittleF}>Jueves - Viernes de 10:00hs a 20:00hs</p>
                        <p className={f.pLittleF}>Sábados de 10:00hs a 17:00hs</p>
                    </div>
                </div>
            </div>
        </>
    )
} 