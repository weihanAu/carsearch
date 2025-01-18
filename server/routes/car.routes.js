const express = require('express');
const router = express.Router();
const Car = require('../models/car.model');

// Get all cars with optional filters
router.get('/', async (req, res) => {
  try {
    const filters = {};
    if (req.query.make) filters.make = req.query.make;
    if (req.query.model) filters.model = req.query.model;
    if (req.query.year) filters.year = parseInt(req.query.year);

    // pagination
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 10; 
    const skip = (page - 1) * limit;
    const cars = await Car.find(filters)
     .skip(skip) 
     .limit(limit);

    const totalCars = await Car.countDocuments(filters);
    const totalPages = Math.ceil(totalCars / limit);

    res.json({
        cars,
        page,
        totalPages,
        totalCars
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

//narrow down filters by car make

//narrow down filters by car make and model

module.exports = router;
