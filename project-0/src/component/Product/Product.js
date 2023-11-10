import React from "react";
import "./Product.css";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faCocktail } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  //console.log(props.country);
  const { flags, name, area, capital, ccn3 } = props.country;
  
  let navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/country/${name.common}`);
  }

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
          <small>ccn3: {ccn3}</small>
        </p>
        <p>
          <small>Capital: {capital}</small>
        </p>
        <button className="cart-button" onClick={() => props.handleAddProduct(props.country)}>
          <FontAwesomeIcon icon={faShoppingCart} />
          Add to cart
        </button>
        <button className="remove-button">Remove Country</button>
        <Link to={`/country/${name.common}`}><button className="see-details-button">See Details</button></Link>
        <button className="see-details-button" onClick={() => {handleNavigate()}}>Using Button not Link</button>
      </div>
    </div>
  );
};

export default Product;
