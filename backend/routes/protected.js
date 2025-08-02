const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');
const User = require('../models/User');
router.get('/', authMiddleware, (req, res) => {
    res.json({
        message: 'This is a protected route',
        userId: req.user.id
    });
});
router.get('/me', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});



module.exports = router;