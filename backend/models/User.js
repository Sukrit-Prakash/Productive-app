const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Hash passwords in production
  profilePicture: { type: String, default: '' },
  yearlyGoals: [
    {
      goalId: { type: mongoose.Schema.Types.ObjectId, ref: 'Goal' },
      goalTitle: { type: String },
      progress: { type: Number, default: 0 },
      status: { type: String, enum: ['active', 'completed'], default: 'active' },
      deadline: { type: Date },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
