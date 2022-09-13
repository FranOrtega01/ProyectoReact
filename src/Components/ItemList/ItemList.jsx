import React, {useEffect, useState} from "react";
import { Item } from '../Item/Item'

export const ItemList = ({products}) => {
    console.log(products);
    return(
        <div className="productCardContainer">
            {products.map(prod => <Item key={`${prod.id} - ${prod.product}`} product={prod} />) }
        </div>
    )
}