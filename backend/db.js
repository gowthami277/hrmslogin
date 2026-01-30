const express = require("express");
const connectDB = require("./db"); // or db1
require("dotenv").config();

const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("HRMS Backend Running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
