import React, {useEffect, useState} from "react";
import {ItemList} from './ItemList'
import CircularIndeterminate from '../../Components/Spinner/Spinner'
import { useParams } from 'react-router-dom'

export const ItemListContainer = ({greetings}) => {  

    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(true);

    let { categoriaName } = useParams()

    const URL_BASE = `https://fakestoreapi.com/products`
    const URL_CATEGORY = `https://fakestoreapi.com/products/category/`

    useEffect( () => {
        fetch(categoriaName ? `${URL_CATEGORY}${categoriaName}` : URL_BASE)
            .then(res=>res.json())
            .then((data)=> {
                setProducts(data);
                setLoad(false);
            })
        setLoad(true)
    }, [categoriaName])

    return( 
    <>
        {!categoriaName && <h2>{greetings}</h2>}
        {load ? <CircularIndeterminate /> : <ItemList products={products} />}
    </>
    )
}
