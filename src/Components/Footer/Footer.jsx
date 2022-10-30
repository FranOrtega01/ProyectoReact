import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'
import './footer.scss'

export const Footer = ({brand, firstToUpperCase}) => {
    const { currentUser } = useAuth()
    const categoriasList =['snowboard', 'ski', 'ropa', 'bolsos']
    const categorias = []
    categoriasList.map(cat => categorias.push({name:`${firstToUpperCase(cat)}`, to:`/products/category/${cat}`}))

    return (
        <footer>
            <Link to={'/'}><h3>{brand}</h3></Link>
            <div>
                {categorias.map(cat => <Link key={`${cat.id} - ${cat.name}`} to={cat.to}>{cat.name}</Link> )}
            </div>
            <div>
                <Link to={currentUser ? '/dashboard' : '/login'}>Mi perfil</Link>
                <Link to={'/cart'}>Carrito</Link>
            </div>
            <Link to={'/order-by-id'}>Buscar mi compra</Link>
        </footer>
    )
}
