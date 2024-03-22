require("./db/connection"); // Require database connection
const express = require("express");
const bodyParser = require("body-parser");
const roomsRouter = require("./routes/rooms");
const bookingsRouter = require("./routes/bookings");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my application!");
});

// Mount rooms router at "/rooms" path
app.use("/rooms", roomsRouter);

// Mount bookings router at "/bookings" path
app.use("/bookings", bookingsRouter);
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
