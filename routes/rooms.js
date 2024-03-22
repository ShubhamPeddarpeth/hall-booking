// backend/routes/rooms.js
const express = require("express");
const router = express.Router();
const Room = require("../models/Room.js");

// Get all rooms
router.get("/rooms", async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    next(error);
  }
});

// Create a new room
router.post("/rooms", async (req, res, next) => {
  try {
    const room = await Room.create(req.body);
    res.status(201).json(room);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
