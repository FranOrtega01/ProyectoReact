import './ItemDetail.scss'
import ItemCount from '../../Components/Contador/ItemCount'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useParams } from 'react-router-dom'
import { customFetch } from "../../assets/fetch";
import { productsList } from "../../assets/products";
import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ItemDetail = ({producto}) => {

    function onAdd(numero){
        setTerminarCompra(true)
        toast.dark(`Agregado ${numero} ${producto.title}`, {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
    
    const [terminarCompra, setTerminarCompra] = useState(false);

    return(
        <>
            <div className="cardDetail">
                <div className='detailImg'>
                    <img src={producto.img} alt="" />
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