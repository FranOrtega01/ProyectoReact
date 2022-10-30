import React from "react";
import { Item } from './Item'

export const ItemList = ({products}) => {
    return(
        <div style={style} className="productCardContainer">
            {products.map(prod => <Item key={`${prod.id} - ${prod.title}`} product={prod} />) }
        </div>
    )
}

const style = {
    minHeight: '70vh'
}