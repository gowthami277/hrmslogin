const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/", authRoutes);

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

