const express = require('express');
const { bookPackage, getUserBookings } = require('../controllers/bookingController');
const router = express.Router();

router.post('/book', bookPackage);
router.get('/:userId', getUserBookings);

module.exports = router;
