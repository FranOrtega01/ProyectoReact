import React from "react";
import logo from '../../assets/descarga.png';
import './Header.scss';
import {Nav} from './Nav/Nav';
import {CartWidget} from '../CartWidget/CartWidget'

const Header = ({children}) => {
    const categorias = [
        {nombre:'Ski', id:0}, 
        {nombre:'Snowboard' , id:1}, 
        {nombre:'Mujeres' , id:2},
        {nombre:'Hombres' , id:3}
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