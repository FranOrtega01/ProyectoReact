import React, {useState} from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './itemCount.scss'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    const MySwal = withReactContent(Swal)

    const Suma = () => {
        count < stock ? setCount(count + 1) : MySwal.fire({html: <p>No hay más stock!</p>})
    }
    const Resta = () => {
        count > 1 ? setCount(count - 1) : MySwal.fire({html: <p>El mínimo es 1!</p>})
    }

    return(
        <>
            <div className="itemCountContainer">
                <div>
                    <button id="Resta" onClick={Resta}>-</button>
                    <p>{count}</p>
                    <button id="Suma" onClick={Suma}>+</button>
                </div>
                <button onClick={onAdd}>Agregar al carrito</button>
            </div>
        </>
    )
    }


export default ItemCount