
const express=require('express');
const router=express.Router();
const authMiddleware = require('../middlewares/auth-middleware');
const SubscriptionController=require('../controllers/subscription-controller')
const GetSubscription=require('../controllers/getsubscription')
router.route('/subscriber').post(SubscriptionController);
router.route('/getsubscription').get(authMiddleware,GetSubscription)
module.exports=router;