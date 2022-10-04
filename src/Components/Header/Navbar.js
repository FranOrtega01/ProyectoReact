import React from "react";
import logo from '../../assets/descarga.png';
import './Header.scss';
import {Nav} from './Nav/Nav';
import {CartWidget} from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'



export const Navbar = () => {
    const categorias = [
        {nombre:`Mens's clothing`, id:0, to: `/products/category/men's clothing`}, 
        {nombre: `Women's clothing` , id:1, to: `/products/category/women's clothing`}, 
        {nombre:'Jewelery' , id:2, to: '/products/category/jewelery'},
        {nombre:'Electronics' , id:3, to: '/products/category/electronics'}
    ];
    return(
        <header>
            <Link style={logoStyle} to='/'>
                <img src={logo} alt=""/>
                <h1>Brand Store</h1>
            </Link>
            <Nav categorias={categorias}/>
            <Link to={'/cart'} className='cartWidget'>
                <CartWidget/>
            </Link>
        </header>
    )
}

const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none'
}

