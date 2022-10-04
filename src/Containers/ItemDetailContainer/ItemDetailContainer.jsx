import React , { useEffect, useState} from "react";
import { customFetch } from "../../assets/fetch";
import { productsList } from "../../assets/products";
import { ItemDetail } from './ItemDetail'
import { useParams } from 'react-router-dom'
import CircularIndeterminate from '../../Components/Spinner/Spinner'



export const ItemDetailContainer = () => {
    

    const [product, setProduct] = useState({});
    const [error, setError] = useState(false)
    const [load, setLoad] = useState(true);


    let { productoId } = useParams()

    const URL_BASE = `https://fakestoreapi.com/products`

    useEffect(() => {
        setLoad(true)
        const getItem = async () => {
            try{
                const respuesta = await fetch(`${URL_BASE}/${productoId}`);
                const data = await respuesta.json();
                const producto = {...data, stock: Math.floor(Math.random()*100)}
                setProduct(producto)
                setLoad(false)
            }
            catch{
                setError(true)
            }
        }
        getItem()
    }, [productoId])


    return(
        <>
            {error 
                ? 
            <h2>Hubo un error, por favor vuelva a intentarlo</h2> 
                : 
            load ?
            <CircularIndeterminate />
            :
            <ItemDetail producto= {product} />}
        </>
    )

}