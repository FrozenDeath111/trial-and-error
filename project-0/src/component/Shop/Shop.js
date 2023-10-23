import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  const selectedCountry = country.slice(0, 10);

  const [cart, setCart] = useState([]);
  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="country-container">
        {selectedCountry.map((sC) => (
          <Product country={sC} key={sC.ccn3}
            handleAddProduct={handleAddProduct}></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
