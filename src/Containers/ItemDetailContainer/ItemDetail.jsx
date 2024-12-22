import './ItemDetail.scss'
import ItemCount from '../../Components/Contador/ItemCount'
import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '../../Context/CartContext';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export const ItemDetail = ({ producto }) => {

    const [terminarCompra, setTerminarCompra] = useState(false);
    const { add } = useContext(CartContext)
    const [currentImg, setCurrentImg] = useState(0)

    function onAdd(count) {
        setTerminarCompra(true)
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

    function imgChangeFwd() {
        currentImg === (producto.img.length - 1) ? setCurrentImg(0) : setCurrentImg(currentImg + 1)
    }
    function imgChangeBack() {
        currentImg === 0 ? setCurrentImg(producto.img.length - 1) : setCurrentImg(currentImg - 1)
    }

    return (
        <>
            <section className="cardSection">
                <div className='cardDetail'>
                    <div className='detailSubImg'>
                        {producto.img.map((image, index) =>
                            <img key={`Detail SubImg - ${producto.title} - ${index}`} src={image} alt={producto.title} onClick={() => setCurrentImg(index)}
                                className={index === currentImg ? 'current' : ''}
                            />
                        )}
                    </div>
                    <div className='detailImg'>
                        <img className='img-fluid' src={producto.img[currentImg]} alt={producto.title} />
                        {/* Si el array tiene mas de un item, mostrar las flechas */}
                        {producto.img[1] &&
                            (
                                <>
                                    <ArrowForwardIosIcon className='arrowFwd' onClick={imgChangeFwd} />
                                    <ArrowBackIosIcon className='arrowBack' onClick={imgChangeBack} />
                                </>
                            )}
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
            </section>
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