const { UserCog2 } = require('lucide-react');
const {User}=require('../models/user-model');

const register=async(req,res,next)=>{


    try{
    const {fullname,email,city,otp,password,dob,payment,timeSlot,favourateGenre,notifications,phoneNumber,secondPhoneNumber}=req.body;
    const userExists=await User.findOne({email});
console.log("1. Incoming Body:", req.body);
if(userExists){
    return res.status(400).json({msg:"Email already exists"});
}

const newUser=await User.create({fullname,email,city,otp,password,dob,payment,timeSlot,favourateGenre,notifications,phoneNumber,secondPhoneNumber});
res.status(201).json({user:newUser,msg:"Registration Successfull",token:await newUser.generateToken(),
    userId:newUser._id.toString()
});
    }
    catch(error){
        next(error)
    }
}


const login=async(req,res)=>{
    try{
const {email,password}=req.body;

const userExists=await User.findOne({email});
if(!userExists){
    return res.status(400).json({message:"Invalid Credentials"})
}

const isPasswordCorrect=await userExists.comparePassword(password);
if(!isPasswordCorrect){
    return res.status(401).json({message:"Invalid Email or Password"});
}

const token=await userExists.generateToken();

return res.status(200).json({
    msg:"Login Successfull",
    token,
    userId:userExists._id.toString(),
    email:userExists.email,
    phoneNumber:userExists.phoneNumber,
    fullname:userExists.fullname
});
    }
    catch(error){
     console.log(error);
     return res.status(500).json('Internal Server error');
    }
};

const user=(req,res)=>{
  try{
  const userData=req.user;
  console.log(userData);
return res.status(200).json({userData});
  }
  catch(error){
    console.log(`error from the user: ${error}`)
  }
}



module.exports={register,login,user};