import React from "react";
import FirstPic from "./image_1.png";
import SecondPic from "./image_2.png";

export const DishPicOne = () => {
  return (
    <div class="block-5__image-1">
      <img class="block-5__image-1--height" src={FirstPic} alt="img_1" />
    </div>
  );
};

export const DishPicTwo = ({ onClickFunc }) => {
  return (
    <div class="block-5__image-block" onClick={onClickFunc}>
      <img class="block-5__image-2" src={SecondPic} alt="img_2" />
    </div>
  );
};
