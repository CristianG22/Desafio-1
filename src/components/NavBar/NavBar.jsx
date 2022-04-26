import React from "react";
import "./NavBar.css";
import logo from "../../images/logo.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


export default function NavBar() {
  return (
    <>

      <div className="navbar-parts">
        <Link to='/'>  <img src={logo} alt="" className="logo-navbar" /> </Link>
        <ul className="flex-menu">
          <Link to='/'>Inicio</Link>
          <Link to='/category/electricas'>Eléctricas</Link>
          <Link to='/category/acusticas'>Acústicas</Link>
          <CartWidget />
        </ul>
      </div>

    </>
  );
}