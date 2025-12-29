const {Booking} = require('../models/booking-model');

const BookingUser = async (req, res) => {
  try {
   const response=req.body;
   await Booking.create(response);
    return res.status(200).json({
      msg: "Thanks for Booking us in our Cinema."
    });
  } catch (error) {
    return res.status(500).json({message:"Message not Delivered"});
  }
};

module.exports = BookingUser;
