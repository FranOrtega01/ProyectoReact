import './App.scss';
import React from "react";
import {Navbar} from './Components/Header/Navbar'
// import Contador from './Components/Contador/Contador'
// import Usuarios from './Components/Usuarios/Usuarios'
import {ItemListContainer} from './Containers/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './Containers/ItemDetailContainer/ItemDetailContainer';
import {Cart} from './Containers/Cart/Cart'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CustomProvider from './Context/CustomContext';

const App = () => {

  const greetings = 'Welcome to Brand Store '
  
  return(
    <>
    <CustomProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<ItemListContainer greetings={greetings}/>}/>
            <Route path='products/category/:categoriaName' element={<ItemListContainer greetings={greetings}/>}/>
            <Route path='/products/:productoId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>  
    </CustomProvider>
    </>
    )
  }

export default App
