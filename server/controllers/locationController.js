const Location = require('../models/Location');

// @desc Get all locations for a user
// @route GET /api/locations
// @access Private
exports.getLocations = async (req, res) => {
  try {
    const locations = await Location.find({ userId: req.user.id });
    res.json(locations);
  } catch (err) {
    console.error(err);
    res.status(500).json({msg: 'Server error'});
  }
}

// @desc Create a new location
// @route POST /api/locations
// @access Private  
exports.createLocation = async (req, res) => {

  // Code to create location...

} 

// @desc Update a location
// @route PUT /api/locations/:id
// @access Private

exports.updateLocation = async (req, res) => {
  
  // Code to update location...

}

// @desc Delete a location 
// @route DELETE /api/locations/:id
// @access Private

exports.deleteLocation = async (req, res) => {

  // Code to delete location...

}