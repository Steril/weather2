import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addLocation } from '../actions/locationActions';

function LocationEditor() {
  const [name, setName] = useState('');
  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(100);
  const [precipitation, setPrecipitation] = useState(0);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newLocation = {
      name, 
      minTemp,
      maxTemp,
      precipitation
    };

    dispatch(addLocation(newLocation));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Location name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        value={minTemp}
        onChange={(e) => setMinTemp(e.target.value)}  
      />

      <input
        type="number"
        value={maxTemp}
        onChange={(e) => setMaxTemp(e.target.value)}
      />

      <input
        type="number"
        value={precipitation}
        onChange={(e) => setPrecipitation(e.target.value)}
      />

      <button type="submit">Add Location</button>
    </form>
  );
}

export default LocationEditor;