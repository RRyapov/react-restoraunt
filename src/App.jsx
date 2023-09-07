import React from "react";
import "./style.css";
import { Header } from "./components/header/Header";
import { Squares } from "./components/body/square_tables/Squares";

export const App = () => {
  return (
    <>
      <Header />
      <Squares />
    </>
  );
};
