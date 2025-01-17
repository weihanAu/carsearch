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
    const cars = await Car.find(filters);
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//narrow down filters by car make

//narrow down filters by car make and model

// Add a new car
router.post('/', async (req, res) => {
  const car = new Car({
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    price: req.body.price,
    color: req.body.color,
  });
  try {
    const newCar = await car.save();
    res.status(201).json(newCar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a car by ID
router.get('/:id', async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: 'Car not found' });
    res.json(car);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a car by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(
      req.params.id,
      {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        price: req.body.price,
        color: req.body.color,
      },
      { new: true }
    );
    if (!updatedCar) return res.status(404).json({ message: 'Car not found' });
    res.json(updatedCar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a car by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedCar = await Car.findByIdAndDelete(req.params.id);
    if (!deletedCar) return res.status(404).json({ message: 'Car not found' });
    res.json({ message: 'Car deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
