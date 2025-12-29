const express=require('express');
const router=express.Router();
const authMiddleware=require('../middlewares/auth-middleware');

const authControllers=require('../controllers/auth-controllers');


router.route('/register').post(authControllers.register);
router.route('/login').post(authControllers.login)
router.route('/user').get(authMiddleware,authControllers.user);


module.exports=router