import React from "react";
import "./NavBar.css";
import logo from "../imagenes/logo.png";


export default function NavBar() {
  return (
    <>
    <div className="navbar-parts">
      <img src={logo} alt="" className="logo-navbar"/>
      <ul className="flex-menu">
        <li> <a href=""> Inicio </a></li>
        <li> <a href=""> Eléctricas </a></li>
        <li> <a href=""> Acústicas </a></li>
        <li> <a href=""> Accesorios </a></li>
        <li> <a href=""> Nosotros </a></li>
      </ul>
    </div>

    </>
  );
}