import './Cart.scss'
import React, {useState, useContext, useRef} from 'react';
import { CartContext } from '../../Context/CartContext';
import { CartItem } from './CartItem';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { DB } from '../../firebase/firebase'
import { collection, addDoc, serverTimestamp , doc, updateDoc} from 'firebase/firestore';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from "react-bootstrap/Alert";
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'
import {cartSchema} from '../../Validations/cartValidation';
import { useAuth } from '../../Context/AuthContext'


function ModalFunction({children, load}) {

    const {cart} = useContext(CartContext)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const checkStock = () => {
        let error = false
        cart.map(cartItem => {
            if (cartItem.cantidad > cartItem.product.stock){
                error = true
                toast.error(`${cartItem.product.title} ya no posee este stock!`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        })
        if(!error) handleShow()
    }

    return (
        <>
        <button onClick={checkStock}>Terminar Compra</button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Termina tu compra!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancelar
            </Button>
            <Button disabled={load} type='submit' form='cartForm' variant="primary"
            >
                Comprar
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export const Cart = () => {      
    const { currentUser } = useAuth()
    const {cart, remove, reset, cartPrice} = useContext(CartContext)

    const [error, setError] = useState('')
    const [load, setLoad] = useState(false)
    const emailRef = useRef()
    const nameRef = useRef()

    const ValidateCart = async (event) => {
        const e = event.target
        event.preventDefault();
        let formData = {
            nombre: e[1].value,
            email: e[0].value
        }
        const isValid = await cartSchema.isValid(formData)
        isValid && finalizarCompra()
    }

    const finalizarCompra = () => {
        setLoad(true)
        const sellsCollection = collection(DB, 'sells')
        addDoc(sellsCollection, {
            user: {
                nombre: nameRef.current.value,
                email: emailRef.current.value,
            },
            cart,
            date: serverTimestamp(),
            totalPrice: cartPrice,
        })
        .then(({id}) => {
            setLoad(false)
            actualizarStock();
            reset();
            Swal.fire(`Tu ID de compra es: ${id}, no la pierdas!`)
        })
        .catch((error) => {
            console.error(error);
            setError('No encontramos ese producto')
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
        <>
            <section className='cartSection'> 
                <div className='cartTitle'>
                {cart.length === 0 
                    ?
                    <h2>Tu carrito está vacío, <Link style={linkStyle} to={'/'}>empezá a comprar</Link>!</h2>
                    :
                    <h2>Tu carrito</h2>
                }
                <DeleteIcon className='cartReset' fontSize='large' onClick={reset} />
                </div> 

                {cart.map(x => <CartItem key={`Cart - ${x.product.title}`} item={x} remove={remove}/>)}
                {/*Si el carrito esta vacio, no mostrar el div de terminar compra */}
                {cart[0] && (<div className='terminarCompra'>
                    <p>Total: <span>${cartPrice}</span></p>
                    <ModalFunction load={load} func={finalizarCompra}>
                        {/* {error && <Alert variant='danger'>{error}</Alert>} */}
                        {error && <Alert variant='danger'>{error}</Alert>  }
                        {currentUser && <h5>Comprando como {currentUser.displayName}</h5>}
                        <Form onSubmit={ValidateCart} id='cartForm'>
                            <Form.Group className='mt-2 w-100' id='signEmail'>
                                <Form.Control type='email' placeholder='Email' defaultValue={currentUser && currentUser.email} required ref={emailRef}/>
                            </Form.Group>
                            <Form.Group className='mt-2 w-100' id='signPassword'>
                                <Form.Control type='text' placeholder='Name' defaultValue={currentUser && currentUser.displayName} required ref={nameRef}/>
                            </Form.Group>
                        </Form>
                    </ModalFunction>
                </div>)}
            </section>
            <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
        </>
    )
}

const linkStyle = {
    color: 'goldenrod'
}