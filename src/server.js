const express = require("express");
const cors = require("cors");

const app = express();

// Set up CORS options
const corsOptions = {
  origin: "*", // Change this to your client's URL (e.g., http://localhost:3000)
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Enable CORS for all routes
app.use(cors(corsOptions));

// Your other routes and middleware here...

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
