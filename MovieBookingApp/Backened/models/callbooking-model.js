const mongoose = require('mongoose');

const CallBookingSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    client:{
        type:String,
        required:true
    },
    agentName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    SelectedSlot: {
        type: String,
        required: true
    }
}); 

const CallBooking = mongoose.model('CallBooking', CallBookingSchema);

module.exports = {CallBooking};