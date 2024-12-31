import React, { useEffect, useState } from "react";
import { Item } from "../../components/item/Item";
import { item } from "../../components/product-data/data";
import { useParams } from "react-router-dom";
import "./ShopCategory.css";

export const ShopCategory: React.FC = () => {
  const { category } = useParams<CategoryParams>();
  const [products, setProducts] = useState<item[]>([]);
  {
    /* first figure out the item interface from product-data/data 
    and program it to be more relevant with image fs
    removed image from item interface*/
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();

        const filteredProducts = data.filter(
          (product) => product.category === category
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="shop-category">
      <h1>{category?.toUpperCase()} COLLECTION</h1>

      <div className="shop-category-products">
        {products.map((product) => (
          <Item
            key={product._id}
            _id={product._id}
            name={product.name}
            newPrice={product.newPrice}
            oldPrice={product.oldPrice}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};
