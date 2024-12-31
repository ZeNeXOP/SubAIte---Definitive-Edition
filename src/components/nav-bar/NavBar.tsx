import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import cart_icon from "../Assets/cart_icon.png";

export const NavBar = () => {
  /* use state variable such that navbar works */

  const [menu, setMenu] = useState("shop"); //declares and defines a usestate for navbar navigation, we are setting setMenu to menu

  return (
    <div className="navbar">
      <div
        className="nav-logo"
        onClick={() => {
          setMenu("shop");
        }}
      >
        {/* insert image tag for logo*/}
        <Link to="/">Subaite</Link>
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
          <Link to="/category/men">Men</Link> {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          {" "}
          <Link to="/category/women">Women</Link> {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          {" "}
          <Link to="/category/kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}
        </li>{" "}
        <li onClick={() => {
          setMenu("add");
        }}
        >
          {""}
          <Link to="/add">Add Product</Link> {menu === "add" ? <hr /> : <></>}
        </li>
        {/* using a ternery operator we check if the menu is equal to the setMenu which was set up when clicked, if it is, a different css implementation is rendered*/}
      </ul>
      <div className="login-cart">
        <Link to="/login">
          <button>Login/Sign-Up</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
