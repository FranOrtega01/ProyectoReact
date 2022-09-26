import React from "react";
import {Link, NavLink} from 'react-router-dom'

export const Nav = ({categorias}) => {
    return(
        <nav>        
            {categorias.map((categoria) => {
                return <NavLink key={`${categoria.id} - ${categoria.nombre}`} to={categoria.to}>{categoria.nombre}</NavLink>
            })}
        </nav>
    )
}
