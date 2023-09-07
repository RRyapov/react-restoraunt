/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

export const HeaderContent = () => {
  const [isViewElement, setViewElement] = useState(true);
  return (
    <div className="header-content">
      Добро пожаловать в
      <div className="header-content__subtitle">Наш ресторан</div>
      <div className="header-content__suptitle">
        {isViewElement && <>ДОМ ЛУЧШЕЙ ЕДЫ</>}
      </div>
      <div className="header-content__button">
        <a
          className="header-content__button-item"
          onClick={() =>
            setViewElement((prevIsViewElement) => !prevIsViewElement)
          }
        >
          VIEW MENU
        </a>
      </div>
    </div>
  );
};
