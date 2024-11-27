import { useState } from 'react';
import PropTypes from 'prop-types';
import style from './ImageCarousal.module.css';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNavigation = (imageIndex) => {
    setCurrentImageIndex(imageIndex - 1);
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Image Carousal</h1>
      <div className={style.imageContainer}>
        <img
          src={images[currentImageIndex].url}
          alt=""
          className={style.image}
        />
      </div>

      <div className={style.imageCarousalContainer}>
        {images.map((image) => (
          <img
            src={image.url}
            key={image.id}
            className={`${style.carousalImages} ${
              image.id === currentImageIndex + 1 ? style.active : ''
            }`}
            onClick={() => handleNavigation(image.id)}
          />
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
