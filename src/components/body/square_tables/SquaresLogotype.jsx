import React from "react";
import SquaresLogo from './frame_pic.png';

export const SquaresLogotype = () => {
    return (
        <img
            className="frame__content-item_pic"
            src={SquaresLogo}
            alt="frame_logo"
          />
    );
}
