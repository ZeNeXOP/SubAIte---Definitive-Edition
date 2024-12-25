import React from 'react';
import './Item.css';
import { item } from '../product-data/data';




export const Item: React.FC<item> = (props) => {
  return (
    <div className="item">
        <img src="" alt="" /> {/* image in the product card, gotta import image files */}
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                {props.new_price}
            </div>
            <div className="item-price-old">
                {props.old_price}
            </div>
        </div>
    </div>
  )
}
