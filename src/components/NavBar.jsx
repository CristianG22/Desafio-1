import React from "react";
import "./NavBar.css";
import logo from "../imagenes/logo.png";
import CartWidget from "./CartWidget";


export default function NavBar() {
  return (
    <>

      <div className="navbar-parts">
        <img src={logo} alt="" className="logo-navbar" />
        <ul className="flex-menu">
          <li> <a href="#Inicio"> Inicio </a></li>
          <li> <a href="#Electricas"> Eléctricas </a></li>
          <li> <a href="#Acusticas"> Acústicas </a></li>
          <li> <a href="#Accesorios"> Accesorios </a></li>
          <li> <a href="#Nosotros"> Nosotros </a></li>
          <li> <CartWidget/> </li>
        </ul>
      </div>

    </>
  );
}