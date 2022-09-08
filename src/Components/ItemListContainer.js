import React from "react";
import ItemCount from './Contador/ItemCount'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function onAdd(){
    const MySwal = withReactContent(Swal);
    return(
            MySwal.fire({
                title:'Añadido exitosamente!',
                })
    )
}

export const ItemListContainer = ({nombre}) => {
    return( 
    <>
        <h2>Bienvenido {nombre} a Brand Store!</h2>
        <ItemCount stock = {16} initial={1} onAdd={onAdd} />
    </>
    )
}
