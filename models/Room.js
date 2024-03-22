// models/Room.js
const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  seatsAvailable: {
    type: Number,
    required: true,
  },
  amenities: [String],
  pricePerHour: {
    type: Number,
    required: true,
  },
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
