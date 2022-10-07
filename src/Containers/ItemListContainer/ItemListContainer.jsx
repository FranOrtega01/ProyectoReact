import React, {useEffect, useState} from "react";
import {ItemList} from './ItemList';
import CircularIndeterminate from '../../Components/Spinner/Spinner';
import { useParams } from 'react-router-dom';
import { DB } from '../../firebase/firebase';
import {getDocs, collection, query, where} from 'firebase/firestore';


export const ItemListContainer = ({greetings}) => {  

    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(true);

    let { categoriaName } = useParams();


    useEffect(() => {
        //Setear la carga en true mientras solicita a la db
        setLoad(true)
        //Solicitar la coleccion 'products'
        const productsCollection = collection(DB, 'products');
        //Si el params no es undefined,filtrar por categoria
        const q = categoriaName ? query(productsCollection, where('category', '==', categoriaName)) : productsCollection
        getDocs(q)
        .then((data) => {
            //Metodo .data para obtener la data especifica
            const lista = data.docs.map(prod => { 
                return {
                    ...prod.data(),
                    id:prod.id
                }
            })
            setProducts(lista)
        })
        .catch((error) => console.error(error))
        .finally(()=> setLoad(false))
    }, [categoriaName])

    return( 
    <>
        {!categoriaName && <h2>{greetings}</h2>}
        {load ? <CircularIndeterminate /> : <ItemList products={products} />}
    </>
    )
}
