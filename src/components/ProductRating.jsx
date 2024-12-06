import style from './ProductRating.module.css';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa6';

const ProductRating = ({ product }) => {
  return (
    <div className={style.ratingContainer}>
      <h1>Product Rating</h1>
      <RatingSlider
        min={0}
        max={product.totalRatings}
        rating={product.ratings[4]}
      />
      <RatingSlider
        min={0}
        max={product.totalRatings}
        rating={product.ratings[3]}
      />
      <RatingSlider
        min={0}
        max={product.totalRatings}
        rating={product.ratings[2]}
      />
      <RatingSlider
        min={0}
        max={product.totalRatings}
        rating={product.ratings[1]}
      />
      <RatingSlider
        min={0}
        max={product.totalRatings}
        rating={product.ratings[0]}
      />
    </div>
  );
};

const RatingSlider = ({ min, max, rating }) => {
  return (
    <div className={style.sliderContainer}>
      <p>{rating.rating}</p>
      <FaStar />
      <input type="range" min={min} max={max} value={rating.count} />
      <p>{rating.count}</p>
    </div>
  );
};

ProductRating.propTypes = {
  product: PropTypes.object.isRequired, // Fixed typo in PropTypes
};

RatingSlider.propTypes = {
  min: PropTypes.number.isRequired, // Fixed typo in PropTypes
  max: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default ProductRating;
