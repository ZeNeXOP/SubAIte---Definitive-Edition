import React, { useState } from "react";
import "./AddProduct.css";

export const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    newPrice: 0,
    oldPrice: 0,
    category: "men",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevData) => {
      const newData = {
        ...prevData,
        [name]: name.includes("Price") ? Number(value) : value,
      };
      console.log(`Field Received: ${name}`);
      console.log(`New Value: ${value}`);
      console.log("Updated Product: ", newData);

      return newData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Product: ", product);

    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      const data = await response.json();
      alert(data.message);

      if (response.ok) {
        setProduct({
          name: "",
          newPrice: 0,
          oldPrice: 0,
          category: "men",
        });
      }
    } catch (error) {
      console.error("Error adding product: ", error);
      alert("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="add-product-container">
      <h1 className="add-product-title">Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
        >
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
        <input
          type="number"
          name="newPrice"
          value={product.newPrice}
          onChange={handleChange}
          placeholder="New Price"
        />
        <input
          type="number"
          name="oldPrice"
          value={product.oldPrice}
          onChange={handleChange}
          placeholder="Old Price"
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
