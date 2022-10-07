import React , { useEffect, useState} from "react";
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
import CircularIndeterminate from '../../Components/Spinner/Spinner';
import { DB } from '../../firebase/firebase'
import {doc, getDoc, collection } from 'firebase/firestore'

export const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);
    const [load, setLoad] = useState(true);


    let { productoId } = useParams();

    useEffect(() => {
        const productsCollection = collection(DB, 'products')
        const refDoc = doc(productsCollection, productoId)
        getDoc(refDoc)
        .then((data) => {
            setProduct({
                id: data.id,
                ...data.data()
            })
        })
        .catch((error) => {
            console.error(error);
            setError(true)
        })
        .finally(() => setLoad(false) )
    }, [productoId]);

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