const express = require('express');
const router = express.Router();
const authMiddleware=require('../middlewares/auth-middleware');
const CallBookingUser=require('../controllers/callbooking-controller') 
const GetTimeLineData=require('../controllers/gettimelinedata-controller');

router.route('/callbooking').post(CallBookingUser);
router.route('/getbookedcall').get(authMiddleware,GetTimeLineData);
module.exports = router;

