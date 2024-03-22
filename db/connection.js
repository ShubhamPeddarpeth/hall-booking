const mongoose = require("mongoose");

// MongoDB connection URI with correct credentials and database name
const mongoURI =
  "mongodb+srv://shubhampeddarpeth:KxlB3o0DQDN7Ik1w@hall-booking-db.d7fh7hk.mongodb.net/hall-booking-db?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true, // useNewUrlParser is deprecated, but it's recommended to use it for backward compatibility
    useUnifiedTopology: true, // useUnifiedTopology is deprecated, but it's recommended to use it for better handling of server discovery and monitoring
  })
  .then(() => {
    console.log("Connected to MongoDB");
    // Place your code that depends on MongoDB connection here
    // For example, importing models or starting your server
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
