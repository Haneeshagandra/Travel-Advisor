// src/components/Filter.js
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Slider, Button } from '@material-ui/core';

const Filter = ({ type, setType, range, setRange, showDates, handleDateButtonClick }) => {
  return (
    <div>
      <FormControl style={{ minWidth: '150px', marginRight: '20px' }}>
        <InputLabel>Filter</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>

      <Slider
        value={range}
        min={1}
        max={5}
        step={1}
        onChange={(e, value) => setRange(value)}
        style={{ width: '200px', marginRight: '20px' }}
      />

      {showDates && <Button variant="contained" color="primary" onClick={handleDateButtonClick}>Enter Dates</Button>}
    </div>
  );
};

export default Filter;
