// src/components/SearchBar.js
import React from 'react';
import { TextField } from '@material-ui/core';

const SearchBar = ({ handleSearchInput }) => {
  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      onChange={handleSearchInput}
      style={{ marginBottom: '20px' }}
    />
  );
};

export default SearchBar;
