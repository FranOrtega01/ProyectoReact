import './Item.scss'
import { Button } from '../Button/Boton'
export const Item = ({product}) => {
   return(
        <div className="productCard">
            <img src={product.image} alt="" />
            <h3>{product.title}</h3>
            <span>{`$${product.price}`}</span>
            <Button text={'Ver más'} />
        </div>
   )
}