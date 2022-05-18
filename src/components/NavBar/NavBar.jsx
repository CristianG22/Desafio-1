import React, { useContext, useState } from "react";
import nb from "./css/NavBar.module.css";
import "./css/NavBarHamburg.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';


export default function NavBar() {

  const { cartQuantity } = useContext(GlobalContext)

  const [sidebar, setSidebar] = useState(false)

  const showSideBar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbarHamb">
        <div className="menu_bars">
          <GiHamburgerMenu onClick={showSideBar} className="iconsBar"/>
        </div>

        <Link to='/'>
          <img src="https://firebasestorage.googleapis.com/v0/b/guitargodwebfb.appspot.com/o/logo%20cris.png?alt=media&token=be57dc18-017e-4a0c-9807-666e27aaefba"
            alt=""
            className="navbarHamb_logo" />
        </Link>

        {
            cartQuantity === 0 ? "" : <CartWidget className="cartQuantPosition" quantity={cartQuantity} />
          }

      </div>

      <nav className={sidebar ? "nav_menu active" : "nav_menu"}>
        <ul  onClick={showSideBar} className="nav_menu_items">

          <li className="navbar_toggle">
            <div className="menu_bars">
              <MdClose className="iconsBar"/>
            </div>
          </li>

          <li className="nav_text">
            <Link to='/'>Inicio</Link>
          </li>

          <li className="nav_text">
            <Link to='/category/electricas'>Eléctricas</Link>
          </li>

          <li className="nav_text">
            <Link to='/category/acusticas'>Acústicas</Link>
          </li>

        </ul>
      </nav>


      <div className={nb.navbarParts}>
        <Link to='/'>
          <img src="https://firebasestorage.googleapis.com/v0/b/guitargodwebfb.appspot.com/o/logo%20cris.png?alt=media&token=be57dc18-017e-4a0c-9807-666e27aaefba"
            alt=""
            className={nb.navbarLogo} />
        </Link>
        <ul className={nb.flexMenu}>
          <Link to='/'>Inicio</Link>
          <Link to='/category/electricas'>Eléctricas</Link>
          <Link to='/category/acusticas'>Acústicas</Link>
          {
            cartQuantity === 0 ? "" : <CartWidget quantity={cartQuantity} />
          }
        </ul>
      </div>

    </>
  );
}