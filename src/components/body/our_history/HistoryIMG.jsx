import React, { useState } from "react";
import classNames from "classnames";

export const HistoryPicture = ({ classname, source }) => {
  const [isColoured, setColoured] = useState(false);
  return (
    <img
      onClick={() => setColoured((prevIsColoured) => !prevIsColoured)}
      className={classNames(
        classname,
        { "block-img__img--active": isColoured },
        { "block-img__img--disabled": !isColoured }
      )}
      src={source}
      alt="block_img"
    />
  );
};
