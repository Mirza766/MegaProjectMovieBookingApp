const {Subscription} = require('../models/subscription-model');

const SubscriptionController = async (req, res) => {
  try {
   const response=req.body;
   await Subscription.create(response);
    return res.status(200).json({
      msg: "Thanks for contacting us! We'll get back to you soon."
    });
  } catch (error) {
    return res.status(500).json({message:"Message not Delivered"});
  }
};

module.exports = SubscriptionController;