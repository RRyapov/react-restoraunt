import React from "react";
import { DishPicTwo } from "./DishPictures";

const arr = [
  { title: "Гамбургер ---- ", price: "250 руб." },
  { title: "Чизбургер ---- ", price: "350 руб." },
  { title: "Бигбургер ---- ", price: "450 руб." },
];

export const DishPrices = () => {
  return (
    <div class="burgers">
        
        {arr.map((item) => {
            return (
                <div class="block-5__burgers">
                    <DishPicTwo />
            <p>{item.title}
            <span>{item.price}</span>
          </p>
          </div>
          )
        })}
    </div>
  );
};

