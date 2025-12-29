const {CallBooking}=require('../models/callbooking-model');


const GetTimeLineData=async(req,res)=>{
    try{
        const userId=req.user._id;
        if (!userId) {
            return res.status(400).json({ message: "UserId not Found" });
        }
        const getBookingData = await CallBooking.find({ userId: userId });

        if (getBookingData.length === 0) {
            return res.status(404).json({ message: "No TimeLine found for this email" });
        }
        res.status(200).json(getBookingData);
    }
    catch(error){
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

module.exports=GetTimeLineData