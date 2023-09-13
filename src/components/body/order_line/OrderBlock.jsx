import React from "react";
import "./order-style.css";
import "./background_1.png"

export const OrderPart = () => {
  return (
    <div className="block-4">
      <div className="container">
        <div className="block-holder">
          <div className="block-4__text">
            <h1 className="block-4__text--title-1">
              Отпразднуйте в одном из самых лучших ресторанов
            </h1>
            <h2 className="block-4__text--title-2">
              Только в этом месяце бизнес-ланч от 250 ₽
            </h2>
          </div>
          <div className="block-4__button">
            <a className="button" href="#">
              ЗАКАЗ СТОЛИКА
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
