// backend/routes/bookings.js
const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// Get all bookings
router.get("/", async (req, res, next) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
    console.log("booking");
  } catch (error) {
    next(error);
  }
});

// Create a new booking
router.post("/", async (req, res, next) => {
  try {
    const { roomId, date, startTime, endTime } = req.body;

    // Check if the room is already booked for the same date and time
    const existingBooking = await Booking.findOne({
      roomId: roomId,
      date: date,
      $or: [
        {
          $and: [
            { startTime: { $lte: startTime } },
            { endTime: { $gt: startTime } },
          ],
        },
        {
          $and: [
            { startTime: { $lt: endTime } },
            { endTime: { $gte: endTime } },
          ],
        },
        {
          $and: [
            { startTime: { $gte: startTime } },
            { endTime: { $lte: endTime } },
          ],
        },
      ],
    });

    if (existingBooking) {
      return res
        .status(400)
        .json({ message: "Room already booked for the same date and time." });
    }

    // If room is available, create the booking
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
