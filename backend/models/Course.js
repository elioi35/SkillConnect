const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    trim: true
  },
  mentor: {
    type: String,
    required: [true, 'Please add a mentor'],
    trim: true
  },
  mentorPhoto: {
    type: String,
    required: [true, 'Please add a mentor photo URL'],
    trim: true
  },
  rating: {
    type: Number,
    required: [true, 'Please add a rating'],
    min: 0,
    max: 5
  },
  students: {
    type: [String],
    default: []
  },
   category: {
    type: String,
    required: [true, 'Please add a category'],
    trim: true  
    },
});

module.exports = mongoose.model('Course', CourseSchema);