const uploadToCloudinary = require('../middlewares/cloudinary-middleware');
const {Feedback}=require('../models/feedback-model');


const GetFeedback = async (req, res) => {
  try {
    console.log("Body:", req.body);
    console.log("File:", req.file);

    const { name, queryType, message } = req.body;

    let imageUrl = "";

    if (req.file) {
      const cloudinaryResult = await uploadToCloudinary(
        req.file.path,
        `feedback-${Date.now()}`
      );

      imageUrl = cloudinaryResult.secure_url;
    }

    const newFeedback = await Feedback.create({
      name,
      queryType,
      message,
      image: imageUrl,
    });

    res.status(200).json({
      msg: "Feedback submitted successfully",
      data: newFeedback,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Server Error",
      error: error.message,
    });
  }
};


const RetrieveFeedback=async(req,res)=>{
        try{
const feedbacks=await Feedback.find();
res.status(200).json(feedbacks);

if(!feedbacks || feedbacks.length===0){
    return res.status(404).json({message:"No Feedbacks Found"});
}
    }
    catch(error){
        next(error);
    }
}


module.exports = {GetFeedback,RetrieveFeedback};