import React from "react";

export const Nav = ({categorias}) => {
    return(
        <nav>        
            {categorias.map((categoria) => {
                return <a style={style.nav} key={categoria.id} href="">{categoria.nombre}</a>
            })}
        </nav>
    )
}

const style = {
    nav:{
        textDecoration: 'none',
        padding:'0 20px',
    }
}