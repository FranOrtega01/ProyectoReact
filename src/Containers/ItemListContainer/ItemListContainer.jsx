import React, {useEffect, useState} from "react";
import {ItemList} from './ItemList'
import CircularIndeterminate from '../../Components/Spinner/Spinner'
import { customFetch } from "../../assets/fetch";
import { productsList } from "../../assets/products";
import { useParams } from 'react-router-dom'



export const ItemListContainer = ({greetings}) => {  

    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(true);

    let { categoriaName } = useParams()
    console.log(categoriaName);

    const URL_BASE = `https://fakestoreapi.com/products`
    const URL_CATEGORY = `https://fakestoreapi.com/products/category`

    useEffect( () => {
        // fetch(categoriaName ? `URL_CATEGORY${categoriaName}` : URL_BASE)
        //     .then(res=>res.json())
        //     .then((data)=> {
        //         console.log(data.data);
        //         setProducts(data.data);
        //         setLoad(false);
        //     })
        setLoad(true)
        customFetch(categoriaName ? productsList.filter(p => p.category == categoriaName) : productsList)
            .then(
                res =>{
                    setProducts(res)
                    setLoad(false)
                }
            )
    }, [categoriaName])

    return( 
    <>
        <h2>{greetings}</h2>
        {load ? <CircularIndeterminate /> : <ItemList products={products} />}
    </>
    )
}
