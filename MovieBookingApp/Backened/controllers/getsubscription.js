const {Subscription}=require('../models/subscription-model');


const GetSubscription=async(req,res)=>{
    try{
        const email=req.user.email;
        if (!email) {
            return res.status(400).json({ message: "Email Not Found" });
        }
        const getSubscription = await Subscription.find({ email: email });

        if (getSubscription.length === 0) {
            return res.status(404).json({ message: "No bookings found for this email" });
        }
        res.status(200).json(getSubscription);
    }
    catch(error){
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

module.exports=GetSubscription