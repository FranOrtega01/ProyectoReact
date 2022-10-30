import React, {createContext, useState} from "react";
import { useEffect } from "react";
import { useLocalStorage } from '../useLocalStorage'

export const CartContext = createContext(); 

export const CartProvider = ({children}) => {
    //State
    const [cart, setCart] = useLocalStorage('cart', [])
    const [cartNumber, setCartNumber] = useState(0)
    const [cartPrice, setCartPrice] = useState(0)

    //Funciones cart
    const add = (product, cantidad) => {
        if(inList(product.id)){ //Busca el index y la cantidad del item, luego lo saca y lo agrega sumandole la cantidad anterior
            const index = cart.findIndex(item => item.product.id == product.id)
            const prevQty = cart[index].cantidad;
            const newCart = cart.filter(item => item !== cart[index])
            setCart([...newCart, {product, cantidad: cantidad + prevQty}])
        }else{
            setCart([...cart, {product, cantidad}])
        }
        refreshPrice(product)
    }

    const remove = (id) => {//Borra el item
        setCart(cart.filter(item => item.product.id !== id ))
    }

    const reset = () => {//Vacia el carrito
        setCart([])
    }

    const inList = (id) => {//Busca si el item ya esta en el cart
        return cart.some(item => item.product.id == id)
    }
    const refreshNum = () => {//actualiza el numero
        const cartNum = cart.reduce((acumulador, {cantidad}) => acumulador + cantidad, 0);
        setCartNumber(cartNum)
    }
    const refreshPrice = () => {
        const cartTotalPrice = cart.reduce((acumulador,{product, cantidad}) => acumulador + product.price*cantidad , 0)
        setCartPrice(cartTotalPrice)
    }

    //Effect
    useEffect(() => {
        refreshNum()
        refreshPrice()
    }, [cart])



    return( 
        <CartContext.Provider value={{cart, cartNumber, cartPrice, add, remove, reset}}>
            {children}
        </CartContext.Provider>
    )
}
