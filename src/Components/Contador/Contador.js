import React, {useState} from "react";

const Contador = () => {
    const [contador, setContador] = useState(0)
    const accion = () => {
        setContador(contador + 1)
    }
    return(
        <>
            <span>{contador}</span>
            <button onClick={accion}>Sumar</button>
        </>
    )
}

export default Contador