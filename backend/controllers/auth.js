const express = require('express');
const router = express.Router();

const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Register route

router.post('/register', async(req, res) => {    
    const { email, password } = req.body;
    const hashedPasword = await bcrypt.hash(password, 10);

    try{
        const user = await User.create({email, password: hashedPasword});
        res.json({message: 'User registered successfully'});
    } catch(error){
        {res.status(400).json({ error: ' user already exists'});
    }  }});


    //Log in

    router.post('/login', async(req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({ email});

        if (!user) return res.status(401).json({ error: 'Invalid email or password'});

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(401).json({  error: 'Invalid email or password' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h'});
        res.json({ token });
        }

       
)
 module.exports = router;