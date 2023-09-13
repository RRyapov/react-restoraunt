import React from "react";
import Img_1 from "./block_img_1.png";
import Img_2 from "./block_img_2.png";
import Img_3 from "./block_img_3.png";
import "../square_tables/squares_style.css";
import { HistoryPicture } from "./HistoryIMG";

const arr = [
  { classname: "block-img__img-1", src: Img_1 },
  { classname: "block-img__img-2", src: Img_2 },
  { classname: "block-img__img-3", src: Img_3 },
];

export const HistPictures = () => {
  return (
    <div className="block-img">
      {arr.map((item) => {
        return <HistoryPicture classname={item.classname} source={item.src} />;
      })}
    </div>
  );
};
