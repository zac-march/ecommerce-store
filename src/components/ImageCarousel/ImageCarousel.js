import React, { useEffect, useState } from "react";
import style from "./ImageCarousel.module.css";
import arrowForward from "../../images/arrow_forward.svg";
import arrowBackward from "../../images/arrow_back.svg";

const ImageCarousel = (props) => {
  const { screenshots } = props;
  const [cauroselItems, setCauroselItems] = useState();
  const [currentSlide, setCurrentSlide] = useState();

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
          <a
            onClick={() => setCurrentSlide(index)}
            id={"anchor-" + index}
            href={"#slide-" + index}
            aria-hidden="true"
          >
            {" "}
          </a>
        ),
      };
    });
    setCauroselItems(items);

    setCurrentSlide(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const anchorLink = document.querySelector("#anchor-" + currentSlide);
    if (anchorLink) {
      const anchors = document.querySelectorAll('[id^="anchor-"]');
      for (let anchor of anchors) anchor.classList.remove(style.highlight);
      anchorLink.click();
      anchorLink.classList.add(style.highlight);
    }
  }, [currentSlide]);

  function handleSlide(direction) {
    if (direction > 0)
      setCurrentSlide((currentSlide + direction) % cauroselItems.length);
    else
      setCurrentSlide(
        (currentSlide + direction + cauroselItems.length) % cauroselItems.length
      );
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
                onClick={() => handleSlide(-1)}
              >
                <img alt="Arrow backward" src={arrowBackward} />
              </button>
              <button
                className={style.sliderBtnRight}
                onClick={() => handleSlide(1)}
              >
                <img alt="Arrow forward" src={arrowForward} />
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
