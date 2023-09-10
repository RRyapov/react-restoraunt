import React from "react";
import "./squares_style.css";
import { SquaresItem } from "./SquaresItem";

export const Squares = () => {
  
  return (
    <div className="frame container">
      <div className="frame__content">
        <SquaresItem
          titleFirstEl="Магическая"
          titleSecondEl="Атмосфера"
          description="В нашем заведении царит магическая атмосфера наполненная вкусными
            ароматами"
        />
        <SquaresItem
          titleFirstEl="Лучшее качество"
          titleSecondEl="Еды"
          description="Качество нашей Еды - отменное!"
        />
        <SquaresItem
          titleFirstEl="Недорогая"
          titleSecondEl="Еда"
          description="Стоимость нашей Еды зависит только от ее количества. Качество всегда
          на высоте!"
        />
      </div>
    </div>
  );
};
