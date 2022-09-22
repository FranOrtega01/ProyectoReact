import React from "react";
import logo from '../../assets/descarga.png';
import './Header.scss';
import {Nav} from './Nav/Nav';
import {CartWidget} from '../CartWidget/CartWidget'

const Header = () => {
    const categorias = [
        {nombre:'Men', id:0}, 
        {nombre:'Women' , id:1}, 
        {nombre:'Jewelery' , id:2},
        {nombre:'Electronics' , id:3}
    ];
    return(
        <header>
            <div>
                <img src={logo} alt=""/>
                <h1>Brand Store</h1>
            </div>
            <Nav categorias={categorias}/>
            <CartWidget/>
        </header>
    )
}

export default Header 