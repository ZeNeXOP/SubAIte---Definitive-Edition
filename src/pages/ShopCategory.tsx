import React, { useEffect, useState } from "react";
import { Item } from "../components/item/Item";
import { item } from "../components/product-data/data";

export const ShopCategory = () => {
  const [products, setProducts] = useState<item[]>([]);  {/* first figure out the item interface from product-data/data 
    and program it to be more relevant with image fs
    removed image from item interface*/}

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Men</h1>

      <div className="men-item">
        {products.map((item) => (
          <Item key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};
