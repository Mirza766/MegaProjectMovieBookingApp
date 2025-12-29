const mongoose=require('mongoose');


const BookingSchema=new mongoose.Schema({
    name:{
       type:String,
       required:true   
    },
    email:{
        type:String,
       required:true    
    },
    phone:{
       type:String,
       required:true   
    },
    movie:{
        type:String,
       required:true 
    },
    date:{
        type:String,
       required:true    
    },
    time:{
       type:String,
       required:true    
    },
    seats:{
         type:[String],  
          default: [], 
        required:true
    }
})

const Booking=mongoose.model('Booking',BookingSchema);

module.exports={Booking}