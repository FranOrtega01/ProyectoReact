import React from "react";
import logo from '../../assets/descarga.png';
import './Header.scss';
import {Nav} from './Nav/Nav';
import {CartWidget} from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'



export const Navbar = () => {
    const categorias = [
        {nombre:'Camperas', id:0, to: '/categoria/camperas'}, 
        {nombre:'Remeras' , id:1, to: '/categoria/remeras'}, 
        {nombre:'Pantalones' , id:2, to: '/categoria/pantalones'},
        {nombre:'Zapatillas' , id:3, to: '/categoria/zapatillas'}
    ];
    return(
        <header>
            <Link style={logoStyle} to='/'>
                <img src={logo} alt=""/>
                <h1>Brand Store</h1>
            </Link>
            <Nav categorias={categorias}/>
            <Link to={'/cart'}>
                <CartWidget/>
            </Link>
        </header>
    )
}

const logoStyle = {
    display: 'flex',
    alignItems: 'center'
}