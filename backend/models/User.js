const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
        type: String, 
        required: [true, 'Please add an email'],
        unique: true,
        trim: true,
        lowercase:true
    },
      password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true
    },
    enrolledCourses: {
        type: [String],
        required: false,
        default: []
    },
    role: {
        type: String,
        enum: ['Student', 'Mentor'],
        default: 'Student',
    },
    completedcourses: {
        type: [String],
        required: false,
        default: []
    },
});

module.exports = mongoose.model('User',UserSchema);