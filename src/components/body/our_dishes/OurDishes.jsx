import React from "react";
import "./our_dishes.css";
import { DishPicOne, DishPicTwo } from "./DishPictures";
import { DishPrices } from "./Prices";

export const OurDish = () => {
  return (
    <div class="block-5">
      <div class="container">
        <div class="block-5__text">
          <h1 class="block-5__title">
            <p class="description__first-element">Наши</p>
            <p class="description__second-element">Блюда</p>
          </h1>
        </div>
        <div class="block-5__images">
          <DishPicOne />
          <div class="block-5__img-2">
          <DishPrices />

            {/* <div class="block-5__burgers">
              <DishPicTwo />
              
            </div>
            <div class="block-5__burgers">
              <DishPicTwo />
              <div class="burgers">
                <p>Гамбургер мини ------------------ 250 руб.</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};
