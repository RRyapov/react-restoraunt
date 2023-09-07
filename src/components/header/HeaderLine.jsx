import React from "react";
import { Navigation } from "./Navigation";
import { Logo } from "./Logo";
import { Basket } from "./Basket";
import { Phone } from "./Phone";

export const HeaderLine = () => {
  return (
    <div className="header-line">
      <Logo />
      <Navigation />
      <Basket />
      <Phone />
      <div className="btn">
        <a className="button" href="#">
          ЗАКАЗ СТОЛИКА
        </a>
      </div>
    </div>
  );
};
