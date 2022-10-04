import './Item.scss'
import {Link} from 'react-router-dom'


export const Item = ({product}) => {

    return(
        <div className="productCard">
            <img src={product.image} alt="" />
            <h3>{product.title}</h3>
            <span>{`$${product.price}`}</span>
            <Link to={`/products/${product.id}`}> Ver más </Link>
        </div>
    )
}