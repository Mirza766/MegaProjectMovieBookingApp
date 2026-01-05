const express = require('express');
const router = express.Router();

const upload=require('../middlewares/multer-middleware');
const {GetFeedback,RetrieveFeedback}=require('../controllers/feedback-controller');
const authMiddleware = require('../middlewares/auth-middleware');


router.route('/submit').post(upload.single('image'),GetFeedback);
router.route('/getfeedback').get(authMiddleware,RetrieveFeedback);

module.exports = router;