import React from "react";

export const PricesScheme = ({ title, price }) => {
  return (
    <div class="burgers">
      <p class={title}>
        <span class={price}></span>
      </p>
    </div>
  );
};
