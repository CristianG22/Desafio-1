import React from "react";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import ItemListContainer from "./components/Items/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";


export default function App() {

  return (
    <>
    <NavBar/>
    <br/>
    <h1 style={{textAlign : "center"}}> Bienvenidos a Guitar Gods</h1>
    <br/>
    <ItemDetailContainer/>
    <br/>
    <ItemListContainer/>
  
    </>
  );
}