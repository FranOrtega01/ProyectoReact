import React from "react";

export const CartItem = ({item, remove}) => {
    const {product} = item

    return(
    <div className="cartCard">
        <img src={product.image} alt={product.title} />
        <div>
            <h2>{product.title}</h2>
            <p>Price: <span>${product.price}</span></p>
            <p>Quantity: <span>{item.cantidad}</span></p>
            <div>
                <button onClick={()=> remove(product.id)}>Borrar Item</button>
                <button>Comprar Ahora</button>
            </div>
        </div>
    </div>
    )
}