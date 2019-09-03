import React from 'react';
import './rateFilter.scss';
import { func, number } from 'prop-types';
import { Tooltip } from "@material-ui/core";

const starsRates = [2, 4, 6, 8, 10];

const RateFilter = ({ value, onRateChange }) => {
  const handleRateChange = rate => () => onRateChange(rate);

  return (
    <div className={ "rate-filter" }>
      <p>Rate filter:</p>
      {
         starsRates.map(starRate => (
           <span key={ starRate } className="star">
             <Tooltip title="Click again to unselect the filter" enterDelay={ 200 }>
               <i className="material-icons" onClick={ handleRateChange(starRate) }>{ starRate <= value ? 'star' : 'star_border' }</i>
             </Tooltip>
           </span>
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
