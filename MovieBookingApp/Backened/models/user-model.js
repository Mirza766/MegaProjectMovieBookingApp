const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');


const userSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
     type:String,
        required:true,
        unique: true
    },
     phoneNumber:{
     type:String,
        required:true,
    },
    city:{
       type:String,
       required:true  
    },
    otp:{
       type:String,
       required:true   
    },
    password:{
        type:String,
       required:true    
    },
    dob:{
       type:String,
       required:true   
    },
    secondPhoneNumber:{
        type:String,
       required:true 
    },
    payment:{
        type:String,
       required:true    
    },
    timeSlot:{
      type:String,
       required:true     
    },
    
    favourateGenre:{
       type:String,
       required:true     
    },
    notifications:{
       type:[String],  
       default: [] 
    },
     isAdmin:{
         type:Boolean,
        default:true
    }
})


userSchema.pre('save',async function(next){
const user=this;

if(!user.isModified('password')){
    return next();
}
try{
    const saltRound=await bcrypt.genSalt(10);
    const hash_password=await bcrypt.hash(user.password,saltRound);
    user.password=hash_password;
}
catch(error){
  next(error);
}

})

userSchema.methods.comparePassword=async function(password){
    return bcrypt.compare(password,this.password);
}

userSchema.methods.generateToken=async function(){
    try{
        return jwt.sign({
         userId:this._id.toString(),
         email:this.email,
         isAdmin:this.isAdmin   
        },
        process.env.JWT_SECRET_KEY,{
          expiresIn:'30d'  
        }
    )
    }
    catch(error){
        console.log(error);
    }
}


const User=mongoose.model('User',userSchema);

module.exports={User};

