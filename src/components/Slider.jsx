import style from './Slider.module.css';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Slider = ({ min, max }) => {
  const [value, onChange] = useState(0);

  useEffect(() => {
    const ele = document.querySelector('.buble');
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  });
  return (
    <div className={style.sliderContainer}>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={({ target: { value: radius } }) => {
          onChange(radius);
        }}
      />
      <div className={style.bubble}>{value}</div>
    </div>
  );
};

Slider.propTypes = {
  min: PropTypes.number.isRequired, // Fixed typo in PropTypes
  max: PropTypes.number.isRequired,
};

export default Slider;
