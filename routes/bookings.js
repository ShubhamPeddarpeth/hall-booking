// backend/routes/bookings.js
const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// Get all bookings
router.get("/", async (req, res, next) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
    console.log('booking')
  } catch (error) {
    next(error);
  }
});

// Create a new booking
router.post("/", async (req, res, next) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
