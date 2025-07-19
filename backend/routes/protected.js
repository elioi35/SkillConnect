const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
router.get('/', authMiddleware, (req, res) => {
    res.json({
        message: 'This is a protected route',
        userId: req.user.id
    });
});
module.exports = router;