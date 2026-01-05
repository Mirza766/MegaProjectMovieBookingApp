const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  name: 
  { 
    type: String, 
    required: true 
},
  queryType: { 
    type: String, 
    required: true 
  },
  message: 
  {
     type: String,
      required: true 
    },
  image: { type: String }, 
});


const Feedback = mongoose.model('Feedback', FeedbackSchema);
module.exports={Feedback};