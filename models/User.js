const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: { type: String },
  resume: { type: String },
  role: { type: String, enum: ['employer', 'employee'], required: true }
});

module.exports = mongoose.model('User', UserSchema);