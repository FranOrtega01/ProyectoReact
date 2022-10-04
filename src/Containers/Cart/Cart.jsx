import './Cart.scss'
import React, {useState, useContext} from 'react'
import { CartContext } from '../../Context/CustomContext';
import { CartItem } from './CartItem';
import { Link } from 'react-router-dom';



export const Cart = () => {      
    
    const {cart} = useContext(CartContext)
    const {remove} = useContext(CartContext)
    
    return(
        <> 
            {cart.length === 0 
                ?
                <h2>No items in your cart, <Link style={linkStyle} to={'/'}>start buying</Link>!</h2>
                :
                <h2>Your cart</h2>
            }
            {cart.map(x => <CartItem key={`Cart - ${x.product.title}`} item={x} remove={remove}/>)}
        </>
    )
}

const linkStyle = {
    color: 'goldenrod'
}