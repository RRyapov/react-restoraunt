import React from "react";
import "./squares_style.css";
import { SquaresLogotype } from "./SquaresLogotype";

export const Squares = () => {
  return (
    <div className="frame container">
      <div className="frame__content">
        <div className="frame__content-item">
        <SquaresLogotype />
          <h1 className="frame__content-item_main-title">
            <p className="frame__content-item_main-title-first-element">
              Магическая{" "}
            </p>
            <p className="frame__content-item_main-title-second-element">
              Атмосфера
            </p>
          </h1>
          <h2 className="frame__content-description">
            В нашем заведении царит магическая атмосфера наполненная вкусными
            ароматами
          </h2>
        </div>
        <div className="frame__content-item">
        <SquaresLogotype />
          <h1 className="frame__content-item_main-title">
            <p className="frame__content-item_main-title-first-element">
              Лучшее качество
            </p>
            <p className="frame__content-item_main-title-second-element">Еды</p>
          </h1>
          <h2 className="frame__content-description">
            Качество нашей Еды - отменное!
          </h2>
        </div>
        <div className="frame__content-item">
        <SquaresLogotype />
          <h1 className="frame__content-item_main-title">
            <p className="frame__content-item_main-title-first-element">
              Недорогая{" "}
            </p>
            <p className="frame__content-item_main-title-second-element">Еда</p>
          </h1>
          <h2 className="frame__content-description">
            Стоимость нашей Еды зависит только от ее количества. Качество всегда
            на высоте!
          </h2>
        </div>
      </div>
    </div>
  );
};
