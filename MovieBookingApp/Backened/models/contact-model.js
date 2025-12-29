const mongoose=require('mongoose');


const ContactSchema=new mongoose.Schema({
    fullName:{
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
    queryType:{
        type:String,
       required:true 
    },
    message:{
        type:String,
       required:true    
    }
})

const Contact=mongoose.model('Contact',ContactSchema);

module.exports={Contact}