const express = require('express');
const router = express.Router();
const authMiddleware=require('../middlewares/auth-middleware');
const BookingUser=require('../controllers/booking-controller') 
const GetBooking=require('../controllers/getbooking-controller')

router.route('/booking').post(BookingUser);
router.route('/getbooking').get(authMiddleware,GetBooking);
module.exports = router;

