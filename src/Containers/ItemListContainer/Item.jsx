import './Item.scss'
import { Button } from '../../Components/Button/Boton'
import {Link, NavLink} from 'react-router-dom'


export const Item = ({product}) => {

    return(
        <div className="productCard">
            <img src={product.img} alt="" />
            <h3>{product.title}</h3>
            <span>{`$${product.price}`}</span>
            <Link to={`/item/${product.id}`}> Ver más </Link>
        </div>
    )
}