import './App.scss';
import React, {useEffect, useState} from "react";
import ItemCount from './Components/Contador/ItemCount';
import {Navbar} from './Components/Header/Navbar'
// import Contador from './Components/Contador/Contador'
// import Usuarios from './Components/Usuarios/Usuarios'
import {ItemListContainer} from './Containers/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './Containers/ItemDetailContainer/ItemDetailContainer';
import {Cart} from './Containers/Cart/Cart'
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {

  const greetings = 'Mirá nuestros artículos destacados'
  
  return(
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<ItemListContainer greetings={greetings}/>}/>
            <Route path='/categoria/:categoriaName' element={<ItemListContainer greetings={greetings}/>}/>
            <Route path='/item/:productoId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>  
    </>
    )
  }

export default App

/*

*/