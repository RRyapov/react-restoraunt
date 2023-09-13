import React, { useState } from "react";
import "./history_style.css";
import { HistPictures } from "./HistoryPics";

export const OurHistory = () => {
  const [isShowingText, setShowingText] = useState(false);
  return (
    <div class="block_3">
      <div class="block-text">
        <div class="description-content">
          <h1 class="description__main-title">
            <p class="description__first-element">Наша</p>
            <p class="description__second-element"
            onClick={() => 
            setShowingText((prevIsShowingText) => !prevIsShowingText)
            }
            >История</p>
          </h1>
          <h2 class="description_second-title">
            {" "}
            {isShowingText && (
              <>
                Как и у любого другого самобытного места, у нас есть своя,
                особая история. Идея ресторана пришла основателям неожиданно. Во
                время прогулки по лесу создатель нашего ресторана застрял в
                сотнях километров от ближайшего населенного пункта. Вдали от
                цивилизации и связи им пришлось навремя обустровать себе
                нехитрый быт, добывать и готовить себе еду.
              </>
            )}
          </h2>
        </div>
        <div class="description-info">
          <div class="description-info__first-title">
            93
            <span class="description-info__second-title">Напитки</span>
          </div>
          <div class="description-info__first-title">
            206
            <span class="description-info__second-title">Еда</span>
          </div>
          <div class="description-info__first-title">
            71
            <span class="description-info__second-title">Закуски</span>
          </div>
        </div>
      </div>
      <div class="block-img">
        <HistPictures />
      </div>
    </div>
  );
};
