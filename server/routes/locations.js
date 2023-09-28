const express = require('express');
const router = express.Router();

const {
  getLocations,
  createLocation,
  updateLocation,
  deleteLocation
} = require('../controllers/locationController');

// Routes for /api/locations
router.get('/', getLocations); 

router.post('/', createLocation);

router.put('/:id', updateLocation);

router.delete('/:id', deleteLocation);

module.exports = router;