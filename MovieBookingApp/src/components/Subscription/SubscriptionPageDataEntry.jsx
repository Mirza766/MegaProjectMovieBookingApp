import React from 'react'
import { useContext } from 'react'
import SubscriptionContext from '../context/SubscriptionContext'
import { useForm } from 'react-hook-form';
import "../stylingSheets/BookingPageDataEntry.css";
import { Link } from 'react-router-dom';
import { Controller } from "react-hook-form";
import { TextField} from "@mui/material";
import { ArrowRight } from "lucide-react";

const selectSx = {
  input: { color: "#9CA3AF" },
  label: { color: "#93C5FD" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#ffffff" },
    "&:hover fieldset": { borderColor: "#34D399" },
    "&.Mui-focused fieldset": { borderColor: "#1E40AF" },
  },
  "& .MuiFormHelperText-root": { color: "#F87171" },
  "& .MuiInputLabel-root.MuiInputLabel-shrink": { color: "#34D399", fontWeight: 400 },
};






function SubscriptionPage() {

const {updateSubscription,addSubscription}=useContext(SubscriptionContext);
const lastSubscription=addSubscription[addSubscription.length-1];


console.log(addSubscription)

  const {register,reset,handleSubmit,formState,control}=useForm({
    defaultValues:{
    name:'',
    phoneNumber:'',
    email:''
    },
    mode:'onChange'
  })

  const {isSubmitting,isSubmitSuccessful}=formState;

const onSubmission=async(data)=>{
  try{


await new Promise(resolve=>setTimeout(resolve,2000))
  if (lastSubscription){
    updateSubscription(lastSubscription.id,data);
   console.log("Updated Subscription Data: ",addSubscription)
  }
reset()
}
catch(error){
  console.log('Error is :',error.message)
}
}

  return (
    <div className=' flex flex-col p-4'>
    <div className=' sm:mx-auto items-center mt-25 relative w-full max-w-xl bg-white/5 backdrop-blur-xl rounded-2xl p-2 shadow-2xl border border-white/10'>
      <h2 className='text-3xl h-10 md:h-13 lg:h-16 text-center font-semibold md:font-bold md:text-3xl lg:text-4xl  mb-8 bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text'>Subscription Datails</h2>
      {
        lastSubscription?(
      <form  className='w-full  text-left bg-linear-to-r from-gray-900/10 to-gray-800/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10' onSubmit={handleSubmit(onSubmission)}>
        <div className='subscMasterCont'>
       <Controller
               name='name'
               control={control}
               rules={{required:'Full Name is required'}}
               render={({field,fieldState})=>(
                  <TextField
                  {...field}
                  label='Full Name'
                  fullWidth
                  margin='normal'
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                   sx={selectSx}
                  />
               )}       
               />
         <Controller
                           name='email'
                           control={control}
                           rules={{required:'Email is Required is required',pattern:{
                              value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  
                           }
                      }}
                         render={({field,fieldState})=>(
                          <TextField
                          {...field}
                          fullWidth
                          margin='normal'
                          label='Email'
                          
                          error={!!fieldState.error}
                          helperText={fieldState.error?.message}
                           sx={selectSx}
                          />
                         )}
                      />
                       <Controller
                         name='phoneNumber'
                         control={control}
                         rules={{required:'Phone Number is required'}}
                       render={({field,fieldState})=>(
                        <TextField
                        {...field}
                        fullWidth
                        margin='normal'
                        label='Phone Number'
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                         sx={selectSx}
                        />
                       )}
                    />
       </div>
         <div className="flex items-center justify-center w-full">
       <button type='submit' className=' text-white mt-4 mb-2 group flex items-center gap-1 w-full  sm:w-auto justify-center rounded-lg text-sm sm:text-base bg-linear-to-b from-blue-600 to-blue-400 font-semibold px:6
                         sm:px-8 sm:py-4 py-3 hover:scale-102 transition-all duration-300 cursor-pointer  '>           
                          <span> {isSubmitting? 'Loading....':'Submit'}</span>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                         </button>
                      </div>
                         {
    isSubmitSuccessful?(
<div className='inline-flex items-center px-2 sm:px-4 lg:px-5 space-x-2 max-w-1xl rounded-lg bg-blue-500/10 border border-blue-500/20 transition-all animate-in  slide-in-from-top duration-700 delay-300  mb-4 sm:mb-6 lg:mb-8'>
                  
                  <span className='text-sm text-blue-400'> {
      isSubmitSuccessful &&  <p className>"{lastSubscription.name}" has Subscribed to plan "{lastSubscription.planName}" for price {lastSubscription.price}</p>
    }</span>
   </div>
    ):(
      null
    )
}
      </form>
        ):
        <p>No Subscription Selected Yet</p>
}
    </div>
    </div>
  )
}

export default SubscriptionPage