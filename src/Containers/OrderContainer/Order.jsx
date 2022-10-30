import React from 'react'

export const Order = ({product}) => {
    const itemCart = product.cart
    return (
        <>
            <p style={{fontSize:20}}><strong>Comprado el: </strong>{product.date.toDate().toDateString()}</p>
            {itemCart.map(item => {return (
                <div key={`SearchID ${item.product.title}`} className='d-flex flex-column' style={{borderBottom: '1px solid black'}}>
                    <img className='img-fluid' style={{maxHeight: 300, objectFit: 'contain'}} src={item.product.img[0]} alt={product.title} />
                    <div>
                        <h5>{item.product.title}</h5>
                        <div className='d-flex justify-content-around'>
                            <p><strong>Precio: </strong>${item.product.price}</p>
                            <p><strong>Cantidad: </strong>{item.cantidad}</p>
                        </div>
                    </div>
                </div>
            )})}
        </>
    )
}
