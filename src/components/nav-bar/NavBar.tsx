import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  /* use state variable such that navbar works */

  const [menu, setMenu] = useState("shop"); //declares and defines a usestate for navbar navigation, we are setting setMenu to menu

  return (
    <div className="navbar">
      <div className="nav-logo">
        {/* insert image tag for logo*/}
        <p>Subaite</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          {" "}
          <Link to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>}
        </li>{" "}
        {/* using onclick we set the setMenu with passed parameter which is set to menu */}
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          {" "}
          <Link to="/men">Men</Link> {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          {" "}
          <Link to="/women">Women</Link> {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          {" "}
          <Link to="/kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}
        </li>{" "}
        {/* using a ternery operator we check if the menu is equal to the setMenu which was set up when clicked, if it is, a different css implementation is rendered*/}
      </ul>
      <div className="login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to='/add'>
          <button>Add Product</button>
        </Link>
        <Link to="/login">
          <button>Sign-Up</button>
        </Link>
        <Link to="/cart">
          <button>Cart</button>
        </Link>
        {/* can insert logo for cart */}
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
