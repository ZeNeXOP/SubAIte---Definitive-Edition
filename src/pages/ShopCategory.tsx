import React from "react";
import { Item } from "../components/item/Item";
import data_product from "../components/product-data/data";


export const ShopCategory = () => {
  return (
    <div>
      <h1>Men</h1>

      <div className="men-item">
        {data_product.map((item, i) => {
            return <Item
            key={i}
            id={item.id}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        })}
      </div>

    </div>
  );
};
