const mongoose=require('mongoose');


const SubscriptionSchema=new mongoose.Schema({
    name:{
       type:String,
       required:true   
    },
    email:{
        type:String,
       required:true    
    },
    phoneNumber:{
       type:String,
       required:true   
    },
    price:{
        type:String,
       required:true 
    },
    planName:{
        type:String,
       required:true    
    }
})

const Subscription=mongoose.model('Subscription',SubscriptionSchema);

module.exports={Subscription}