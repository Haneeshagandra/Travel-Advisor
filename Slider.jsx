// src/components/SliderComponent.js
import React from 'react';
import { Slider } from '@material-ui/core';

const SliderComponent = ({ range, setRange }) => {
  return (
    <Slider
      value={range}
      min={1}
      max={5}
      step={1}
      onChange={(e, value) => setRange(value)}
      style={{ width: '200px', marginRight: '20px' }}
    />
  );
};

export default SliderComponent;