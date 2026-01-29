const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

/* REGISTER */
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  // check user exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.json({ message: "User already exists" });
  }

  // encrypt password
  // const hashedPassword = await bcrypt.hash(password, 10);

  // save to DB
  const user = new User({
    email,
    password,
  });

  await user.save();

  res.json({ message: "User registered successfully" });
});

module.exports = router;
