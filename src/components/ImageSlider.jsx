import { useState } from 'react';
import PropTypes from 'prop-types';
import style from './ImageSlider.module.css';

const ImageSlider = ({ images, arrows, navigationDots, delayTime }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoverInterval, setHoverInterval] = useState(null);

  const handlePreviousBtnClick = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextBtnClick = () => {
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handleNavigation = (imageIndex) => {
    setCurrentImageIndex(imageIndex - 1);
  };

  // Handle mouse enter: Start the interval
  const handleOnMouseEnter = () => {
    // Set interval to increment the index every 1 second
    const intervalId = setInterval(
      () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      },
      delayTime ? delayTime : 1000
    );

    setHoverInterval(intervalId); // Store interval ID to clear it later
  };

  // Handle mouse leave: Clear the interval
  const handleOnMouseLeave = () => {
    clearInterval(hoverInterval); // Clear the interval
    setHoverInterval(null); // Reset the interval state
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Image Slider</h1>
      <div className={style.sliderContainer}>
        <button
          className={`${style.previous} ${
            arrows === false ? style.hidden : null
          }`}
          onClick={handlePreviousBtnClick}
        >
          ⫷
        </button>
        <div className={style.imageContainer}>
          <img
            src={images[currentImageIndex].url}
            alt=""
            className={style.image}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
        </div>
        <button
          className={`${style.next} ${arrows === false ? style.hidden : null}`}
          onClick={handleNextBtnClick}
        >
          ⫸
        </button>
      </div>
      <div className={style.bubbleNavigatorContainer}>
        {images.map((image, index) => (
          <button
            className={`${style.bubbleNavigator} ${
              currentImageIndex === index ? style.active : ''
            } ${navigationDots === false ? style.hidden : null}`}
            onClick={() => handleNavigation(image.id)}
            key={image.id}
          >
            ◉
          </button>
        ))}
      </div>
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.array.isRequired,
  arrows: PropTypes.bool,
  navigationDots: PropTypes.bool,
  delayTime: PropTypes.number,
};

export default ImageSlider;
