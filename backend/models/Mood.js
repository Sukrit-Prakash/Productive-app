const mongoose = require('mongoose');

const MoodSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  date: { type: Date, default: Date.now },
  mood: { type: String, enum: ['happy', 'neutral', 'sad', 'excited', 'anxious'], required: true },
  notes: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Mood', MoodSchema);
