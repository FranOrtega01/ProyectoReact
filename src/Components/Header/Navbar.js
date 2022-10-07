import React from "react";
import logo from '../../assets/descarga.png';
import './Header.scss';
import {Nav} from './Nav/Nav';
import {CartWidget} from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'

const firstToUpperCase = word => {
    const str = word;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2
}
export const Navbar = () => {

const categoriasList =['snowboard', 'ski', 'ropa', 'bolsos']
const categorias = []

categoriasList.map(cat => categorias.push({nombre:`${firstToUpperCase(cat)}`, id:0, to: `/products/category/${cat}`}))
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

