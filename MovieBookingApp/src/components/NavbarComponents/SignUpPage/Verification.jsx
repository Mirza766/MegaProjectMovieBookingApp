import React from 'react'
import {useFormContext,Controller, useForm} from 'react-hook-form'
import {Button,Checkbox,TextField,FormControlLabel, FormLabel} from '@mui/material'
import '../../stylingSheets/SignUp.css';
function Verification() {
  
  const {control}=useFormContext();
  
  return (
    <div className='Verification-master-container'>
    <div className='Verification-container'>
       <h2 className='verif-heading'>
       Step 2: Security and  Verification
       </h2>
       <div className='verific-form-detail'>
        <Controller
        name='secondPhoneNumber'
        control={control}
         rules={{required:'Secondary Phone Number is mandatory'}}
         render={({field,fieldState})=>(
          <TextField 
          {...field}
          label='Secondary Phone Number'
           fullWidth
            margin='normal'
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
         )}
        />

         <Controller
        name='otp'
        control={control}
         rules={{required:'OTP is mandatory',minLength:{
          value:5,
          message:"OTP Must Contain 5"
         }}}
         render={({field,fieldState})=>(
          <TextField 
          {...field}
          label='OTP'
           fullWidth
            margin='normal'
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
         )}
        />
     <Controller
     name='agree'
     control={control}
     render={({field})=>(
      <FormControlLabel 
      control={<Checkbox {...field} checked={field.value}/>}
      label='I agree to the terms'
      />
     )}
     />


       </div>
          
      </div>
    </div>
  )
}

export default Verification