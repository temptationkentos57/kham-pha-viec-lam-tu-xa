const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Kết nối tới MongoDB
const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/kham-pha-viec-lam-tu-xa';
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối MongoDB thành công'))
  .catch(err => console.error(err));

// Trang chủ
app.get('/', (req, res) => {
  res.send('Chào mừng đến với Khám Phá Việc Làm Từ Xa!');
});

app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});