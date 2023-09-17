import React, { useState } from "react";
import { DishPicTwo } from "./DishPictures";

const DishPrice = ({ title, price }) => {
  const [isDishShown, setDishShown] = useState(false);
  return (
    <div class="block-5__burgers">
      <DishPicTwo
        onClickFunc={() => setDishShown((prevIsDishShown) => !prevIsDishShown)}
      />
      {isDishShown && (
        <p>
          {title}
          <span>{price}</span>
        </p>
      )}
    </div>
  );
};

const arr = [
  { title: "Гамбургер ---- ", price: "250 руб." },
  { title: "Чизбургер ---- ", price: "350 руб." },
  { title: "Бигбургер ---- ", price: "450 руб." },
];

export const DishPrices = () => {
  return (
    <div class="burgers">
      {arr.map((item) => (
        <DishPrice title={item.title} price={item.price} />
      ))}
    </div>
  );
};
