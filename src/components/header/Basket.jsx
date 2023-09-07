import React from "react";
import BasketPng from "./img/basket.png";

export const Basket = () => {
  return (
    <div className="basket">
      <a href="#">
        <img className="cart-img" src={BasketPng} alt="" />
      </a>
    </div>
  );
};
