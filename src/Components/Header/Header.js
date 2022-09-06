import React from "react";
import logo from '../../assets/descarga.png';
import './Header.scss';
import {Nav} from './Nav/Nav';
import {CartWidget} from '../CartWidget/CartWidget'

const Header = ({children}) => {
    const categorias = [
        {nombre:'Remeras', id:0}, 
        {nombre:'Zapatillas' , id:1}, 
        {nombre:'Chanclas' , id:2},
        {nombre:'Gorras' , id:3}
    ];
    return(
        <header>
            <div>
                <img src={logo} alt=""/>
                <h1>Brand Store</h1>
            </div>
            <Nav categorias={categorias}/>
            <CartWidget/>
            {children}
        </header>
    )
}

export default Header 