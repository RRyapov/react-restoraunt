import React from "react";
import PhonePng from "./img/phone.png";

export const Phone = () => {
  return (
    <div className="phone">
      <div className="phone-holder">
        <div className="phone-img">
          <img src={PhonePng} alt="" />
        </div>
        <div className="number">
          <a className="num" href="#">
            +7(978)751-16-78
          </a>
        </div>
      </div>
      <div className="phone-text">
        Свяжитесь с нами для <br /> бронирования
      </div>
    </div>
  );
};
