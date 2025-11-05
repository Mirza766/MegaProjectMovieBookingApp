import React, { useState } from 'react'
import {useForm,FormProvider} from 'react-hook-form'
import {Button} from '@mui/material'
import '../../stylingSheets/SignUp.css';
import { addSignUpData } from '../../../redux/SignUp/SignUpActions';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { lazy } from 'react';

const AccountDetail=lazy(()=>import('./AccountDetail'))
const Verification=lazy(()=>import('./Verification'))
const Preference=lazy(()=>import('./Preference'))

function SignUpPage() {

const dispatch=useDispatch();




const methods=useForm({mode:'onChange',
  defaultValues: {
    fullname: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    secondPhoneNumber:'',
    otp:'',
    dob: null,
    agree:false,
    favourateGenre:'',
    city:'',
    timeSlot:'',
    payment:'',
    notifications:''
  }
});
const {handleSubmit,trigger,reset,formState}=methods;
const {isSubmitting,isSubmitSuccessful}=formState;
const [step,setStep]=useState(1);


const onSubmission=async(data)=>{
  try{

    await new Promise((resolve)=>setTimeout(resolve,2000));
    console.log('Final form data: ',data);
    dispatch(addSignUpData({...data,dob:new Date(data.dob).toISOString()}));
    reset()
    
  }
  catch(error){
    console.log("Submission errror is: ",error.message)
  }
}

const prevStep=()=>setStep((prev)=>prev-1);
const nextStep=async()=>
  {
    const valid=await trigger();
    if(valid){
      setStep((prev)=>prev+1)
    }
  };


  return (
    <div className='signUp-master'>
    <div className='signUp-total'>
      <h2 className='signup-heading'>Ready to sign up here</h2>
    <div className='signupForm'>
     <FormProvider {...methods} >

     
        <form onSubmit={handleSubmit(onSubmission)}>
          {step===1 && <AccountDetail/> }
          {step===2 && <Verification/>}
          {step===3 && <Preference/>}


           <div className='signUpButtons'>
           {step> 1 && (
            <Button   fullWidth    variant='contained' type='button' onClick={prevStep}>Back</Button>
         
           )}

           { step<3 && (
            <Button  fullWidth variant='contained' type='button' onClick={nextStep}>Next</Button>
           )               
           }
           {
            step===3 && (
             <div>
               <Button className='signup-btn-div' fullWidth variant='contained' type='submit'>{isSubmitting?'Loading':'Submit'}</Button>
               
                <Link to='/signUpPage'>
                  Go to see the SignUpData
              </Link>
              </div>
              
            )
           }    
            
           </div>  
           {isSubmitSuccessful && <p className='signup-btn-para'>User Signed Up Successfully</p>}
        </form>  
        </FormProvider>  
    </div>
  </div>
  </div>
  )
}

export default SignUpPage