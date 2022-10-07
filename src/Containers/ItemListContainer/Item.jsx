import './Item.scss'
import {Link} from 'react-router-dom'


export const Item = ({product}) => {
    return(
        <div className="productCard">
            {(product.stock <= 10 && product.stock > 0 ) && <p className='pocoStock'>{product.stock} restantes!</p>  }
            <img src={product.img} alt="" />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            {product.stock > 0 ? <Link to={`/products/${product.id}`}> Ver más </Link> : <p>No hay stock!</p> }
        </div>
    )
}