const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();
const authRoutes = require('./controllers/auth');

 const app = express();
 const PORT = process.env.PORT || 3000;
 
 connectDB();

// middleware
 app.use(cors());
 app.use(express.json());
 app.use('', authRoutes);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
