const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Admin:admin1234@cluster0.upir4ap.mongodb.net/hrmslogin"
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error("DB Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
