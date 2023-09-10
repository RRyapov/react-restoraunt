import React from "react";
import "./squares_style.css";

export const Squares = () => {
  return (
    <div class="frame container">
      <div class="frame__content">
        <div class="frame__content-item">
          <img
            class="frame__content-item_pic"
            src="frame_pic.png"
            alt="frame_logo"
          />
          <h1 class="frame__content-item_main-title">
            <p class="frame__content-item_main-title-first-element">
              Магическая{" "}
            </p>
            <p class="frame__content-item_main-title-second-element">
              Атмосфера
            </p>
          </h1>
          <h2 class="frame__content-description">
            В нашем заведении царит магическая атмосфера наполненная вкусными
            ароматами
          </h2>
        </div>
        <div class="frame__content-item">
          <img
            class="frame__content-item_pic"
            src="frame_pic.png"
            alt="frame_logo"
          />
          <h1 class="frame__content-item_main-title">
            <p class="frame__content-item_main-title-first-element">
              Лучшее качество
            </p>
            <p class="frame__content-item_main-title-second-element">Еды</p>
          </h1>
          <h2 class="frame__content-description">
            Качество нашей Еды - отменное!
          </h2>
        </div>
        <div class="frame__content-item">
          <img
            class="frame__content-item_pic"
            src="frame_pic.png"
            alt="frame_logo"
          />
          <h1 class="frame__content-item_main-title">
            <p class="frame__content-item_main-title-first-element">
              Недорогая{" "}
            </p>
            <p class="frame__content-item_main-title-second-element">Еда</p>
          </h1>
          <h2 class="frame__content-description">
            Стоимость нашей Еды зависит только от ее количества. Качество всегда
            на высоте!
          </h2>
        </div>
      </div>
    </div>
  );
};
