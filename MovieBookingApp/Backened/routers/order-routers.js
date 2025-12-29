const express=require('express');
const router=express.Router();
const authMiddleware = require('../middlewares/auth-middleware');
const OrderUser=require('../controllers/order-controller');
const GetOrder=require('../controllers/getorder-controller');
router.route('/order').post(OrderUser);
router.route('/getorder').get(authMiddleware,GetOrder);
module.exports=router;