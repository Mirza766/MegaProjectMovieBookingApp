const {Booking}=require('../models/booking-model');


const GetBooking=async(req,res)=>{
    try{
        const email=req.user.email;
        if (!email) {
            return res.status(400).json({ message: "Email Not Found" });
        }
        const userBookings = await Booking.find({ email: email });

        if (userBookings.length === 0) {
            return res.status(404).json({ message: "No bookings found for this email" });
        }
        res.status(200).json(userBookings);
    }
    catch(error){
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

module.exports=GetBooking