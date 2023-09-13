import React from "react";
import "./style.css";
import { Header } from "./components/header/Header";
import { Squares } from "./components/body/square_tables/Squares";
import { OurHistory } from "./components/body/our_history/History";
import { OrderPart } from "./components/body/order_line/OrderBlock";

export const App = () => {
  return (
    <>
      <Header />
      <Squares />
      <OurHistory />
      <OrderPart />
    </>
  );
};
