import React from 'react'
import { useContext } from 'react'
import SubscriptionContext from '../context/SubscriptionContext'
import { useForm } from 'react-hook-form';
import "../stylingSheets/BookingPageDataEntry.css";
import { Link } from 'react-router-dom';
function SubscriptionPage() {

const {updateSubscription,addSubscription}=useContext(SubscriptionContext);
const lastSubscription=addSubscription[addSubscription.length-1];


console.log(addSubscription)

  const {register,reset,handleSubmit,formState}=useForm({
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
    <div className='subscDataCont'>
      <h2 className='subscDetail'>Subscription Datails</h2>
      {
        lastSubscription?(
      <form  className='subscformTotal' onSubmit={handleSubmit(onSubmission)}>
        <div className='subscMasterCont'>
       <div className='subsc-formdata'>
        <label className='subsc-head'>Name: </label>
       <input className='subsc-input' placeholder='Enter your Name' {...register('name',{required:true})}/>
       </div>
        <div className='subsc-formdata'>
        <label className='subsc-head'>Email: </label>
       <input className='subsc-input' placeholder='Enter your Email' {...register('email',{required:true})}/>
       </div>
        <div className='subsc-formdata'>
        <label className='subsc-head'>Phone Number: </label>
       <input className='subsc-input' placeholder='Enter your Phone Number' {...register('phoneNumber',{required:true})}/>
       </div>
       </div>
       <div className='subsc-form-div'>
       <button className='subsc-sub-button' type='submit'>{isSubmitting?'Loading':'Submit'}</button>
       </div>
       {isSubmitSuccessful && <p className='subscparacont'><b>{lastSubscription.name}</b> has Subscribed to plan <b>{lastSubscription.planName}</b> for price <b>{lastSubscription.price}</b></p>}
       <Link to='/dataentrycont'>Go to see The Subsc Cont</Link>
      </form>
        ):
        <p>No Subscription Selected Yet</p>
}
    </div>
  )
}

export default SubscriptionPage