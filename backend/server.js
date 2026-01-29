const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/", authRoutes);

app.listen(3003, () => {
  console.log("Server running on port 3003");
});
