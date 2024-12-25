import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/nav-bar/NavBar"; //importing navigation bar from commponents
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Shop } from "./pages/Shop"; //importing shop page from pages
import { ShopCategory } from "./pages/ShopCategory";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { LoginSignup } from "./pages/LoginSignup";

function App() {
  return (
    <div>
      <BrowserRouter>  {/* using browserrouter to navigate through the pages */}
        <NavBar />
        <Routes>       
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory category="men" />} />
          <Route path="/women" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kids" />} />
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
