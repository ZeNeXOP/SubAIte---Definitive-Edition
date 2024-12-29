import React from "react";
import "./Item.css";
import { item } from "../product-data/data";

export const Item: React.FC<item> = (props) => {
  // Import image dynamically

  return (
    <div className="item">
      <p>{props.name}</p>
      <p className="item-category">{props.category}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.newPrice}</div>
        <div className="item-price-old">${props.oldPrice}</div>
      </div>
    </div>
  );
};
