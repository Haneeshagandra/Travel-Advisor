// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from './Components/Map';
import Filter from './Components/Filter';
import SliderComponent from './Components/Slider';
import LocationMarker from './Components/LocationMarker';
import SearchBar from './Components/SearchBar';

const RAPID_API_KEY = '3b606a257emsh6ff784120871cbfp10a151jsn5663427cce04';

const App = () => {
  const [places, setPlaces] = useState([]);
  const [type, setType] = useState('hotels');
  const [range, setRange] = useState(1);
  const [showDates, setShowDates] = useState(false);
  const [clickedPlace, setClickedPlace] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`, {
          params: {
            latitude: 0,
            longitude: 0,
            radius: range * 1000,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': RAPID_API_KEY,
          },
        });

        const data = response.data.data;
        setPlaces(data);
        setShowDates(type === 'hotels');
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
  }, [type, range]);

  const handleDateButtonClick = () => {
    // Implement date input functionality as needed for hotels
    console.log('Enter Dates button clicked');
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <h1>Travel Advisor App</h1>
      <Filter type={type} setType={setType} range={range} setRange={setRange} showDates={showDates} handleDateButtonClick={handleDateButtonClick} />
      <SliderComponent range={range} setRange={setRange} />
      <SearchBar handleSearchInput={handleSearchInput} />
      <Map places={places} setClickedPlace={setClickedPlace}>
        {places
          .filter((place) => place.name.toLowerCase().includes(searchInput.toLowerCase()))
          .map((place, index) => (
            <LocationMarker key={index} place={place} setClickedPlace={setClickedPlace} />
          ))}
      </Map>
      {clickedPlace && (
        <div style={{ marginTop: '20px' }}>
          <h2>{clickedPlace.name}</h2>
          <p>{clickedPlace.location.address}</p>
          <p>Type: {clickedPlace.types[0]}</p>
        </div>
      )}
    </div>
  );
};

export default App;
