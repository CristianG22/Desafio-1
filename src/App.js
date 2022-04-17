import React from "react";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import ItemListContainer from "./components/Items/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import CartList from "./components/CartList";


export default function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>

          <Route exact path="/" element={<ItemListContainer/>} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer/>} />
          <Route exact path="/detail/:detailId" element={<ItemDetailContainer/>} />
          <Route exact path="/cart" element={<CartList/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  );
}