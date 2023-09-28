import {
  GET_LOCATIONS,
  ADD_LOCATION,
  DELETE_LOCATION
} from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;
  
  switch(type) {
    case GET_LOCATIONS:
      return payload;
    case ADD_LOCATION: 
      return [...state, payload];
    case DELETE_LOCATION:
      return state.filter(location => location._id !== payload);
    default:
      return state;
  }
}