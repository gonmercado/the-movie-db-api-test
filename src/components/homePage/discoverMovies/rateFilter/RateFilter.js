import React from 'react';
import './rateFilter.scss';
import { func, number } from 'prop-types';

const starsRates = [2, 4, 6, 8, 10];

const RateFilter = ({ value, onRateChange }) => {
  const handleRateChange = rate => () => onRateChange(rate);

  return (
    <div>
      {
         starsRates.map(starRate => (
           <span key={ starRate } className="star"><i className="material-icons" onClick={ handleRateChange(starRate) }>{ starRate <= value ? 'star' : 'star_border' }</i></span>
         ))
      }
    </div>
  );
};

RateFilter.propTypes = {
  value: number,
  onRateChange: func.isRequired
};

export default RateFilter;
