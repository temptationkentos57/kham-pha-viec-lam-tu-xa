const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

// Đăng tin tuyển dụng
router.post('/add', async (req, res) => {
  const { title, description, salary, requirements, employerId } = req.body;
  const newJob = new Job({ title, description, salary, requirements, employerId });
  try {
    await newJob.save();
    res.status(201).send('Tin tuyển dụng đã được thêm thành công!');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;