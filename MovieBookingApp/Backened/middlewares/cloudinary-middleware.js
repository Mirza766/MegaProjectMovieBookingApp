const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = async (filePath, imageName) => {
  if (!filePath) {
    throw new Error("File path not found");
  }

  try {
    const result = await cloudinary.uploader.upload(filePath, {
      public_id: imageName,
      folder: "feedback_images",
    });

    // delete local file after upload
    fs.unlinkSync(filePath);

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = uploadToCloudinary;
