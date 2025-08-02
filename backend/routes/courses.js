const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

router.post('/',  async (req, res) => {
    const { title, description, mentor, mentorPhoto, category } = req.body;
    try {
        const course = await Course.create({
            title,
            description,
            mentor,
            mentorPhoto,
            category,
            rating: 0,
        });
        res.json({ message: 'Course created successfully', course });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});



router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

