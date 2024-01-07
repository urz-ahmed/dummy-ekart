import React, { useState, useEffect } from 'react';
import '../css/filterCard.css';

const FilterCard = ({ onFilterChange }) => {
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(2000);

  const handleMinChange = (event) => {
    setMinPrice(parseInt(event.target.value));
  };

  const handleMaxChange = (event) => {
    setMaxPrice(parseInt(event.target.value));
  };

  useEffect(() => {
    onFilterChange({ min: minPrice, max: maxPrice });
  }, [minPrice, maxPrice,onFilterChange]);
  

  return (
    <div className="filterCard">
      <h4>Filter by price</h4>
      <p>Slide to filter Products</p>
      <div className="price-content">
        <div>
          <label>Min</label>
          <p id="min-value">${minPrice}</p>
        </div>

        <div>
          <label>Max</label>
          <p id="max-value">${maxPrice}</p>
        </div>
      </div>

      <div className="range-slider">
        <div className="range-fill"></div>

        <input
          type="range"
          className="min-price"
          value={minPrice}
          min={10}
          max={2000}
          step={10}
          onChange={handleMinChange}
        />
        <input
          type="range"
          className="max-price"
          value={maxPrice}
          min={10}
          max={2000}
          step={10}
          onChange={handleMaxChange}
        />
      </div>
    </div>
  );
};

export default FilterCard;
