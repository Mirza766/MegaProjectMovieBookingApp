const express = require('express');
const router = express.Router();

const ContactUser=require('../controllers/contact-controller') 
const GetContact=require('../controllers/getcontact-controller');
const authMiddleware = require('../middlewares/auth-middleware');


router.route('/contact').post(ContactUser);
router.route('/getcontact').get(authMiddleware,GetContact);
module.exports = router;

