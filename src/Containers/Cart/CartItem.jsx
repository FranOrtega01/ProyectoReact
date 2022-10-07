import React from "react";

export const CartItem = ({item, remove}) => {
    const {product} = item

    return(
    <div className="cartCard">
        <img src={product.img} alt={product.title} />
        <div>
            <h2>{product.title}</h2>
            <p>Price: <span>${product.price}</span></p>
            <p>Quantity: <span>{item.cantidad}</span> (${product.price*item.cantidad})</p>

            <div>
                <button onClick={()=> remove(product.id)}>Borrar Item</button>
            </div>
        </div>
    </div>
    )
}