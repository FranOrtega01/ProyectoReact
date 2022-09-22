import './App.scss';
import React, {useEffect, useState} from "react";

import ItemCount from './Components/Contador/ItemCount';
import Header from './Components/Header/Header'
// import Contador from './Components/Contador/Contador'
// import Usuarios from './Components/Usuarios/Usuarios'
import {ItemListContainer} from './Components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';


const App = () => {

  const greetings = 'Mirá nuestros artículos destacados'
  
  return(
    <>
      <Header></Header>
      <ItemListContainer greetings={greetings}/>
      <ItemDetailContainer />
    </>
    )
  }

export default App