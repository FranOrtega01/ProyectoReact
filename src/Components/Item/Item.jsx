import './Item.scss'
import { Button } from '../Button/Boton'
export const Item = ({product}) => {
   return(
        <div className="productCard">
            <img src={product.img} alt="" />
            <h3>{product.product}</h3>
            <span>{`$${product.price}`}</span>
            <Button text={'Ver más'} />
        </div>
   )
}