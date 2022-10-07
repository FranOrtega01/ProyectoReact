import './Cart.scss'
import React, {useState, useContext} from 'react'
import { CartContext } from '../../Context/CustomContext';
import { CartItem } from './CartItem';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';


export const Cart = () => {      
    
    const {cart} = useContext(CartContext)
    const {remove} = useContext(CartContext)
    const {reset} = useContext(CartContext)
    const {cartPrice} = useContext(CartContext)
    return(
        <section className='cartSection'> 
            <div className='cartTitle'>
            {cart.length === 0 
                ?
                <h2>No items in your cart, <Link style={linkStyle} to={'/'}>start buying</Link>!</h2>
                :
                <h2>Your cart</h2>
            }
            <DeleteIcon className='cartReset' fontSize='large' onClick={reset} />
            </div> 
            {cart.map(x => <CartItem key={`Cart - ${x.product.title}`} item={x} remove={remove}/>)}
            <div className='terminarCompra'>
                <p>Total: <span>${cartPrice}</span></p>
                <button>Terminar Compra</button>
            </div>
        </section>
    )
}

const linkStyle = {
    color: 'goldenrod'
}