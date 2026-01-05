const express = require('express');
const router = express.Router();

const { BookedSlots, GetBookedSlots } = require('../controllers/callbookingbookedSlots-controller');
const authMiddleware=require('../middlewares/auth-middleware');

router.route('/slotbooking').post(BookedSlots);
router.route('/getbookedslot').get(authMiddleware,GetBookedSlots);
module.exports = router;

