const {CallBooking} = require('../models/callbooking-model');

const CallBookingUser = async (req, res) => {
  try {
   const { SelectedSlot, agentName,client, email, phone, userId }=req.body;
   const seatExists=await CallBooking.findOne({SelectedSlot: SelectedSlot});
   if(seatExists){
       return res.status(400).json({message:"Seat Already Booked"})
   }

   await CallBooking.create({userId,
        agentName,
        email,
        phone,
        client,
        SelectedSlot});
    return res.status(200).json({
      msg: "Thanks for contacting us! We'll get back to you soon."
    });
  } catch (error) {
    return res.status(500).json({message:"Call Booking not Delivered"});
  }
};


module.exports = CallBookingUser;