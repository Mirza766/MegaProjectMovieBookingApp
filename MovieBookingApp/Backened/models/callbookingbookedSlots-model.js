const mongoose = require('mongoose');

const CallBookingBookedSchema = new mongoose.Schema({
   bookedSlots:{
         type:[String],  
          default: [], 
        required:true
    }
}); 

const CallBookingBooked = mongoose.model('CallBookingBookedSlot', CallBookingBookedSchema);

module.exports = {CallBookingBooked};