import React, { useState } from 'react'
import {useForm,FormProvider,Controller} from 'react-hook-form'
import {Button,Checkbox,TextField,FormControlLabel} from '@mui/material'
import AccountDetail from './AccountDetail';
import Verification from './Verification';
import Preference from './Preference';
import '../../stylingSheets/SignUp.css';


function SignUpPage() {

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
const {handleSubmit,trigger}=methods;

const [step,setStep]=useState(1);


const onSubmission=(data)=>{
  console.log('Final form data: ',data);

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
               <Button fullWidth variant='contained' type='submit'>Submit</Button>
            )
           }    
           </div>  
        </form>  
        </FormProvider>  
    </div>
  </div>
  </div>
  )
}

export default SignUpPage