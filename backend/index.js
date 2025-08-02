const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();
const authRoutes = require('./controllers/auth');
const courseRoutes = require('./routes/courses');

 const app = express();
 const PORT = process.env.PORT || 3000;
 
 connectDB();

// middleware
 app.use(cors());
 app.use(express.json());
 app.use('/auth', authRoutes);
 app.use('/courses', courseRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
