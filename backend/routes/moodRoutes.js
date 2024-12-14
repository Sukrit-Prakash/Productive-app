const express = require('express');
const router = express.Router();
const Mood = require('../models/Mood');

// Create a new mood entry
router.post('/', async (req, res) => {
  try {
    const newMood = new Mood(req.body);
    const savedMood = await newMood.save();
    res.status(201).json(savedMood);
  } catch (err) {
    res.status(500).json({ message: 'Error saving mood', error: err });
  }
});

// Get all moods for a user
router.get('/:userId', async (req, res) => {
  try {
    const moods = await Mood.find({ userId: req.params.userId }).sort({ date: -1 });
    res.status(200).json(moods);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching moods', error: err });
  }
});

// Delete a mood entry
router.delete('/:moodId', async (req, res) => {
  try {
    await Mood.findByIdAndDelete(req.params.moodId);
    res.status(200).json({ message: 'Mood deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting mood', error: err });
  }
});

module.exports = router;


// WQmAeMj5qhkc9oJr
// sukritprakash2020