import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faCocktail } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  //console.log(props.country);
  const { flags, name, area, capital } = props.country;
  return (
    <div className="product">
      <div>
        <img src={flags.png} alt="" />
      </div>
      <div className="product-description">
        <h4 className="product-name"><FontAwesomeIcon icon={faCocktail} />{name.common}</h4>
        <p>
          <small>Official: {name.official}</small>
        </p>
        <p>
          <small>Area: {area}</small>
        </p>
        <p>
          <small>Capital: {capital}</small>
        </p>
        <button className="cart-button" onClick={() => props.handleAddProduct(props.country)}>
          <FontAwesomeIcon icon={faShoppingCart} />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
