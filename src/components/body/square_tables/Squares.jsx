import React from "react";
import "../body.css";

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
              Стоимость нашей Еды зависит только от ее количества. Качество
              всегда на высоте!
            </h2>
          </div>
        </div>
      </div>
      <div class="block_3">
        <div class="block-text">
          <div class="description-content">
            <h1 class="description__main-title">
              <p class="description__first-element">Наша</p>
              <p class="description__second-element">История</p>
            </h1>
            <h2 class="description_second-title">
              Как и у любого другого самобытного места, у нас есть своя, особая
              история. Идея ресторана пришла основателям неожиданно. Во время
              прогулки по лесу создатель нашего ресторана застрял в сотнях
              километров от ближайшего населенного пункта. Вдали от цивилизации
              и связи им пришлось навремя обустровать себе нехитрый быт,
              добывать и готовить себе еду.
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
              <span class="description-info__second-title">Закуски для пива</span>
            </div>
          </div>
        </div>

        <div class="block-img">
          <img
            class="block-img__img-1"
            src="block_images/block_img_1.png"
            alt="block_img"
          />
          <img
            class="block-img__img-2"
            src="block_images/block_img_2.png"
            alt="block_img"
          />
          <img
            class="block-img__img-3"
            src="block_images/block_img_3.png"
            alt="block_img"
          />
       
          
        </div>
      </div>
    </div>
  );
};
