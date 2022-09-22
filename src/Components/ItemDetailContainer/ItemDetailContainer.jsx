import React , { useEffect, useState} from "react";
import { ItemDetail } from './ItemDetail'


export const ItemDetailContainer = () => {
    

    const [product, setProduct] = useState({});
    const [error, setError] = useState(false)

    useEffect(() => {

        const getItem = async () => {
            try{
                const respuesta = await fetch(`https://fakestoreapi.com/products/1`);
                const data = await respuesta.json();
                const listaProducts = {...data, stock: Math.floor(Math.random()*100)}
                setProduct(listaProducts)
            }
            catch{
                setError(true)
            }
        }
        getItem()
    }, [])


    return(
        <>
            {error ? <h2>Hubo un error, por favor vuelva a intentarlo</h2> : <ItemDetail producto= {product} />} 
        </>
    )

}