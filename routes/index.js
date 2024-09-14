const express = require('express');
const {
    sampleRoute,
} = require('../controllers/sampleController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/sampleroute', authMiddleware, sampleRoute);

module.exports = router;
