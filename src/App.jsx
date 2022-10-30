import './App.scss';
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { NavbarBS } from './Components/Header/NavbarBS';
import { Footer } from './Components/Footer/Footer';
import { ItemListContainer } from './Containers/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './Containers/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './Containers/Cart/Cart';
import { UserContainer } from './UserComponents/userContainer/UserContainer';
import { PrivateRoute } from './Components/PrivateRoute'
import { ForgotPassword } from './UserComponents/ForgotPassword';
import { Login } from './UserComponents/userContainer/Login';
import { Signup } from './UserComponents/userContainer/Signup';
import { Dashboard } from './UserComponents/userContainer/Dashboard';
import { UpdateProfile } from './UserComponents/UpdateProfile';
import { OrderContainer } from './Containers/OrderContainer/OrderContainer';
import { CartProvider } from './Context/CartContext';
import { AuthProvider } from './Context/AuthContext';

const App = () => {

  const firstToUpperCase = word => {
    const str = word;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2
  }
  const brand = 'Apollo Ski Store';
  const greetings = `Bienvenido a ${brand}`;

  return(
    <>
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <NavbarBS brand={brand} firstToUpperCase={firstToUpperCase} />
          <Routes>
              <Route path='/' element={<ItemListContainer greetings={greetings} />} />
              <Route path='products/category/:categoriaName' element={<ItemListContainer greetings={greetings} />} />
              <Route path='/products/:productoId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/signup' element={<UserContainer><Signup /></UserContainer>} />
              <Route path='/login' element={<UserContainer><Login /></UserContainer>} />
              <Route path='/forgot-password' element={<UserContainer><ForgotPassword /></UserContainer>} />
              <Route path='/order-by-id' element={<OrderContainer />} />
              {/* Si no esta logueado, no puede entrar a dashboard */}
              <Route path='/dashboard' element={<PrivateRoute><UserContainer><Dashboard /></UserContainer></PrivateRoute>} />
              <Route path='/update-profile' element={<PrivateRoute><UserContainer><UpdateProfile /></UserContainer></PrivateRoute>} />
          </Routes>
          <Footer brand={brand} firstToUpperCase={firstToUpperCase}/>
        </BrowserRouter>  
      </CartProvider>
    </AuthProvider>
    </>
    )
  }

export default App;
