const mongoose=require('mongoose');


const URL=process.env.MONGO_DB_URL;


const connectDB=async()=>{
    try{
    await mongoose.connect(URL);
    console.log("Connection Established")
    }
    catch(error){
      console.log("Connection Failed:",error);
      process.exit(0);
    }
}


module.exports=connectDB;