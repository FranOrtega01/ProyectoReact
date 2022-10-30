import React, {useState} from "react";
import './itemCount.scss'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    const Suma = () => {
        setCount(count + 1)
    }
    const Resta = () => {
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
                <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </>
    )
    }


export default ItemCount