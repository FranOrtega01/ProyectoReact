import React, {useEffect, useState} from "react";
import {ItemList} from '../ItemList/ItemList'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import CircularIndeterminate from '../Spinner/Spinner'
import {productsList} from '../../assets/products'
import {productsFetch} from '../../assets/productsFetch'


// function onAdd(){
//     const MySwal = withReactContent(Swal);
//     return(
//             MySwal.fire({
//                 title:'Añadido exitosamente!',
//                 })
//     )
// }

export const ItemListContainer = ({greetings}) => {  

    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(true);


    useEffect(() => {
        productsFetch(productsList)
        .then(res => {
            setLoad(true)
            setProducts(res)
            setLoad(false)
        })
    }, [])

    return( 
    <>
        <h2>{greetings}</h2>
        {load ? <CircularIndeterminate /> : <ItemList products={products} />}
    </>
    )
}
