const {Contact}=require('../models/contact-model');


const GetContact=async(req,res)=>{
    try{
        const email=req.user.email;
        if (!email) {
            return res.status(400).json({ message: "Email Not Found" });
        }
        const userContact = await Contact.find({ email: email });

        if (userContact.length === 0) {
            return res.status(404).json({ message: "No bookings found for this email" });
        }
        res.status(200).json(userContact);
    }
    catch(error){
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

module.exports=GetContact