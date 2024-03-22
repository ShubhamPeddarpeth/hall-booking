require('./db/connection')
const express = require("express");
const bodyParser = require("body-parser");
const roomsRouter = require("./routes/rooms");
const bookingsRouter = require("./routes/bookings");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());



app.use("/rooms", roomsRouter);
app.use("/bookings", bookingsRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
