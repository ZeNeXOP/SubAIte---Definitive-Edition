import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/nav-bar/NavBar"; //importing navigation bar from commponents
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Shop } from "./pages/Landing Page/Shop"; //importing shop page from pages
import { ShopCategory } from "./pages/ShopbyCategory/ShopCategory";
import { Product } from "./pages/Product Page/Product";
import { Cart } from "./pages/Cart/Cart";
import { LoginSignup } from "./pages/LoginSignup/LoginSignup";
import AddProduct from "./pages/AddProduct/AddProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {" "}
        {/* using browserrouter to navigate through the pages */}
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/category/:category" element={<ShopCategory />} />
          <Route path="/add" element={<AddProduct category="add" />} />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
