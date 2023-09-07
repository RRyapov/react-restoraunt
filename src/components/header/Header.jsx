import React from "react";
import { HeaderLine } from "./HeaderLine";
import "./header.css";
import { HeaderContent } from "./HeaderContent";


export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <HeaderLine />
        <HeaderContent />
      </div>
    </div>
  );
};

