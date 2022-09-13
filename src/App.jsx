import './App.scss';
import React, {useEffect, useState} from "react";

import ItemCount from './Components/Contador/ItemCount';
import Header from './Components/Header/Header'
// import Contador from './Components/Contador/Contador'
// import Usuarios from './Components/Usuarios/Usuarios'
import {ItemListContainer} from './Components/ItemListContainer/ItemListContainer'


const App = () => {

  const [show, setShow] = useState(true)

  const greetings = 'Mirá nuestros artículos destacados'

  const alternar = () => {
    setShow(!show);
  }
  
  return(
    <>
      <Header id='1'></Header>
      <ItemListContainer greetings={greetings}/>
    </>
    )
  }

export default App