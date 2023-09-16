import React, { useState } from "react";
import "./order-style.css";
import "./background_1.png";
import classNames from "classnames";

export const OrderPart = () => {
  const [isConditionViewed, setConditionViewed] = useState(false);
  return (
    <div className="block-4">
      <div className="container">
        <div className="block-holder">
          <div className="block-4__text">
            <h1 className="block-4__text--title-1">
              Отпразднуйте в одном из самых лучших ресторанов
            </h1>
            <h2 className="block-4__text--title-2">
              {isConditionViewed && (
                <>Только в этом месяце бизнес-ланч от 250 ₽</>
              )}
            </h2>
          </div>
          <div className="block-4__button">
            <a
            onClick={() =>
              setConditionViewed((previousValue) => !previousValue)
            }
              className={classNames(
                "block-4__button--hover-off",
                {'button-active': isConditionViewed},
                {'button-passive': !isConditionViewed}
              )}
             >
              ЗАКАЗ СТОЛИКА
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
