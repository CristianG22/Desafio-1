import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


export default function App() {

  return (
    <>
    <NavBar/>
    <br/>
    <h1> Bienvenidos a Guitar Gods</h1>
    <br/>
    <ItemListContainer/>
    </>
  );
}