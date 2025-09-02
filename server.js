const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/kham-pha-viec-lam-tu-xa';
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connection successful'))
  .catch(err => console.error(err));

// Home page
app.get('/', (req, res) => {
  res.send('Welcome to the Remote Job Exploration Platform!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});