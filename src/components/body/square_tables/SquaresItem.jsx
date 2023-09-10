import React, { useState } from "react";
import { SquaresLogotype } from "./SquaresLogotype";

export const SquaresItem = ({ titleFirstEl, titleSecondEl, description }) => {
  const [isIndicatedTitle, setIndicatedTitle] = useState(false);
  return (
    <div
      className={`frame__content-item ${
        isIndicatedTitle
          ? "frame__content-item--active"
          : "frame__content-item--disabled"
      }`}
    >
      <SquaresLogotype />
      <h1 className="frame__content-item_main-title">
        <p className="frame__content-item_main-title-first-element">
          {titleFirstEl}
        </p>
        <p
          className="frame__content-item_main-title-second-element"
          onClick={() =>
            setIndicatedTitle((isIndicatedTitle) => !isIndicatedTitle)
          }
        >
          {titleSecondEl}
        </p>
      </h1>
      <h2 className="frame__content-description">
        {isIndicatedTitle && <>{description}</>}
      </h2>
    </div>
  );
};
