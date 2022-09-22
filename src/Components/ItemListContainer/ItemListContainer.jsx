import React, {useEffect, useState} from "react";
import {ItemList} from './ItemList'
import CircularIndeterminate from '../Spinner/Spinner'



export const ItemListContainer = ({greetings}) => {  

    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect( () => {
        fetch(`https://fakestoreapi.com/products/category/men's clothing`)
            .then(res=>res.json())
            .then((json)=> {
                setProducts(json);
                setLoad(false);
            })
    }, [])

    return( 
    <>
        <h2>{greetings}</h2>
        {load ? <CircularIndeterminate /> : <ItemList products={products} />}
    </>
    )
}
