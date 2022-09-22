import './ItemDetail.scss'
import ItemCount from '../Contador/ItemCount'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const ItemDetail = ({producto}) => {

    function onAdd(){
        const MySwal = withReactContent(Swal);
        return(
                MySwal.fire({
                    title:'Añadido exitosamente!',
                    }
            ))
        }
    return(
        <div className="cardDetail">
            <div className='detailImg'>
                <img src={producto.image} alt="" />
            </div> 
            <div className='detailInfo'>
                <h3>{producto.title}</h3>
                <p className='detailDescription'>{producto.description}</p>
                <p className='detailPrice'>$ {producto.price}</p>
                <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
            </div>
        </div>
    )

}