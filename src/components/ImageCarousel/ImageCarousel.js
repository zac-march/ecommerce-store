import React, { useEffect, useState } from "react";
import style from "./ImageCarousel.module.css";
import arrowForward from "../../images/arrow_forward.svg";
import arrowBackward from "../../images/arrow_back.svg";

const ImageCarousel = (props) => {
  const { screenshots } = props;
  const [cauroselItems, setCauroselItems] = useState();

  useEffect(() => {
    const items = screenshots.map((screenshot, index) => {
      return {
        image: (
          <img
            alt="screenshot of game"
            id={"slide-" + index}
            src={screenshot.image}
          />
        ),
        anchor: (
          <a id={"anchor-" + index} href={"#slide-" + index} aria-hidden="true">
            {" "}
          </a>
        ),
      };
    });
    setCauroselItems(items);
  }, []);

  function handleSlide(direction) {
    let anchorTag = window.location.hash;
    if (!anchorTag) anchorTag = "#slide-0";

    const anchorParts = anchorTag.split("-");
    const currentSlideIdx = parseInt(anchorParts[1]);

    let nextSlideIdx;
    if (direction === "next") {
      nextSlideIdx = (currentSlideIdx + 1) % cauroselItems.length;
    } else if (direction === "previous") {
      nextSlideIdx =
        (currentSlideIdx - 1 + cauroselItems.length) % cauroselItems.length;
    }

    document.querySelector("#anchor-" + nextSlideIdx).click();
  }

  return (
    <div className={style.container}>
      <div className={style.sliderWrapper}>
        {cauroselItems && (
          <>
            <div className={style.slider}>
              {cauroselItems.map((item) => item.image)}
            </div>
            <div className={style.sliderBtns}>
              <button
                className={style.sliderBtnLeft}
                onClick={() => handleSlide("previous")}
              >
                <img src={arrowBackward} />
              </button>
              <button
                className={style.sliderBtnRight}
                onClick={() => handleSlide("next")}
              >
                <img src={arrowForward} />
              </button>
            </div>
            <div className={style.sliderNav}>
              {cauroselItems.map((item) => item.anchor)}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;
