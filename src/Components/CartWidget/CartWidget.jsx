import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../../Context/CustomContext';

export const CartWidget = () => {

    const {cartNumber} = useContext(CartContext)
    return (
        <>
            <span>{cartNumber}</span>
            <ShoppingCartIcon color="success" fontSize='large'/>
        </>
    )
}
