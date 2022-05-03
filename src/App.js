import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import ItemListContainer from "./components/Items/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import GlobalContextProvider from "./context/GlobalContext";
import CartList from "./components/Cart/CartList";
import RegisterUser from "./components/RegisterUser";
import CheckoutList from "./components/CheckoutList";


export default function App() {
  return (
    <>
      <GlobalContextProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />

            <Route exact path="/category/:categoryId" element={<ItemListContainer />} />

            <Route exact path="/detail/:detailId" element={<ItemDetailContainer />} />

            <Route exact path="/cart" element={<CartList />} />

            <Route exact path="/register" element={<RegisterUser />} />

            <Route exact path="/checkout" element={<CheckoutList/>}/>
          </Routes>

        </BrowserRouter>
      </GlobalContextProvider>
    </>
  );
}
