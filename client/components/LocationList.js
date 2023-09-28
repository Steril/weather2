import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getLocations } from '../actions/locationActions';

function LocationList() {
  const dispatch = useDispatch();

  const locations = useSelector(state => state.locations);

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  return (
    <div>
      <h1>My Locations</h1>
      
      {locations.map(location => (
        <div key={location._id}>
          <h3>{location.name}</h3>
          <p>Min Temp: {location.minTemp}</p>
          <p>Max Temp: {location.maxTemp}</p>
        </div>
      ))}

    </div>
  );
}

export default LocationList;