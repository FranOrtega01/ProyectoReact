import React, {useEffect, useState} from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './itemCount.scss'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    const [numero, setNumero] = useState(0)


    
    useEffect(() => {
        setNumero (numero + 1)
        // const intervalo = setInterval(() => {
        //     console.log('guti')
        // }, 1000);

        // return (() => {
        //     clearInterval(intervalo)
        // })
    }, [count])


    const Suma = () => {
        // count < stock ? setCount(count + 1) : MySwal.fire({html: <p>No hay más stock!</p>})
        setCount(count + 1)
    }
    const Resta = () => {
        // count > 1 ? setCount(count - 1) : MySwal.fire({html: <p>El mínimo es 1!</p>})np
        setCount(count - 1)

    }

    return(
        <>
            <div className="itemCountContainer">
                <div>
                    <button id="Resta" disabled={count <= 1} onClick={Resta} >-</button>
                    <p>{count}</p>
                    <button id="Suma" disabled={count >= stock} onClick={Suma}>+</button>
                </div>
                <button onClick={onAdd}>Agregar al carrito</button>
            </div>
        </>
    )
    }


export default ItemCount