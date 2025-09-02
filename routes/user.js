const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Đăng ký người dùng
router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;
  const newUser = new User({ name, email, password, role });
  try {
    await newUser.save();
    res.status(201).send('Người dùng đã được đăng ký thành công!');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;