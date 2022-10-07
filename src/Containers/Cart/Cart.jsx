import './Cart.scss'
import React, {useState, useEffect, useContext} from 'react'
import { CartContext } from '../../Context/CustomContext';
import { CartItem } from './CartItem';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { DB } from '../../firebase/firebase'
import { collection, addDoc, serverTimestamp , doc, updateDoc} from 'firebase/firestore';
import Form from '../../Components/Form/Form';

export const Cart = () => {      
    
    const {cart, remove, reset, cartPrice} = useContext(CartContext)

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    //Nota: Crear la logica de volver a chequear el stock y hacer localStorage

    const finalizarCompra = () => {
        const sellsCollection = collection(DB, 'sells')
        addDoc(sellsCollection, {
            user: {
                nombre,
                apellido,
                email,
            },
            cart,
            date: serverTimestamp(),
            totalPrice: cartPrice,
        })
        .then(() => {
            actualizarStock();
            reset();
            setNombre('')
            setApellido('')
            setEmail('')
        })
    }
    const actualizarStock = () => {
        cart.map(item => {
            const updateStock = doc(DB, 'products', item.product.id );
            updateDoc(updateStock,{
                stock: item.product.stock - item.cantidad
            })
        })
    }
    
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
            
            {/*Si el carrito esta vacio, no mostrar el div de terminar compra */}
            {cart[0] && (<div className='terminarCompra'>
                        <p>Total: <span>${cartPrice}</span></p>
                        <button onClick={finalizarCompra}>Terminar Compra</button>
                    </div>)}
            <Form
                nombre={nombre} setNombre={setNombre}
                apellido={apellido} setApellido={setApellido}
                email={email} setEmail={setEmail}
            />
        </section>
    )
}

const linkStyle = {
    color: 'goldenrod'
}