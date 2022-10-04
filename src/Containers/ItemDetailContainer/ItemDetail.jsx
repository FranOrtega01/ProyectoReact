import './ItemDetail.scss'
import ItemCount from '../../Components/Contador/ItemCount'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import React, {useEffect, useState, useContext} from "react";
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '../../Context/CustomContext';


export const ItemDetail = ({producto}) => {

    const [terminarCompra, setTerminarCompra] = useState(false);
    const {add} = useContext(CartContext)

    function onAdd(count){
        // setTerminarCompra(true)
        toast.dark(`Agregado ${count} ${producto.title}`, {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        add(producto, count)
        }
    
    return(
        <>
            <div className="cardDetail">
                <div className='detailImg'>
                    <img src={producto.image} alt="" />
                </div> 
                <div className='detailInfo'>
                    <h3>{producto.title}</h3>
                    <p className='detailDescription'>{producto.description}</p>
                    <p className='detailPrice'>$ {producto.price}</p>
                    {terminarCompra 
                    ? 
                    <Link to={'/cart'} className='btnTerminarCompra'>Terminar Compra</Link>  
                    :
                    <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />}
                </div>
            </div>
            <ToastContainer
            position="bottom-right"
            autoClose={1000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
        </>
    )

}