import React from "react";
import { NavLink } from 'react-router-dom'

export const NavItem = ({categorias}) => {
    return(      
        <>
            {categorias.map((cat) => {
                return <NavLink key={`${cat.id} - ${cat.name}`} to={cat.to}>{cat.name}</NavLink>
            })}
        </>

    )
}
