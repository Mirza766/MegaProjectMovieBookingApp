const {Order}=require('../models/order-model');


const GetOrder=async(req,res)=>{
    try{
        const email=req.user.email;
        if (!email) {
            return res.status(400).json({ message: "Email Not Found" });
        }
        const getOrder = await Order.find({ email: email });

        if (getOrder.length === 0) {
            return res.status(404).json({ message: "No bookings found for this email" });
        }
        res.status(200).json(getOrder);
    }
    catch(error){
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

module.exports=GetOrder