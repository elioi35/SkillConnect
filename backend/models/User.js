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
});

module.exports = mongoose.model('User',UserSchema);