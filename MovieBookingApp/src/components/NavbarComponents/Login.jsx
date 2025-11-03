import React from 'react'
import "../stylingSheets/Login.css";
import {useForm,FormProvider,Controller} from 'react-hook-form'
import {Button,Checkbox,TextField,FormControlLabel} from '@mui/material'

function Login() {

const {control,formState,handleSubmit,reset}=useForm({
  mode:'onChange',
  defaultValues:{
    email:'',
    password:''
  }
})
const {isSubmitting}=formState

const onSubmission=async(data)=>{
try{
await new Promise((resolve)=>setTimeout(resolve,1000))
   console.log('Form submitted successfully',data);
   reset();   
}
catch(error){
  console.log('Error is: ',error.message)
}
  
}

  return (
    <div className='login-master-cont'>
    <div className='login-cont'>
   <h2 className='Login-heading'>Login Page</h2>
   <div className='Login-form'></div>  
   <form onSubmit={handleSubmit(onSubmission)}>
   
     <Controller
             name='email'
             control={control}
             rules={{required:'Please Specify your Email'}}
             render={({field,fieldState})=>(
                <TextField
                {...field}
                label='Email'
                fullWidth
                margin='normal'
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                />
             )}       
             />
              <Controller
             name='password'
             control={control}
             rules={{required:'Please Specify your Password'}}
             render={({field,fieldState})=>(
                <TextField
                {...field}
                label='password'
                fullWidth
                margin='normal'
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                />
             )}       
             />
             <Button fullWidth variant='contained' type='submit'>{isSubmitting?'Loading....':'Login'}</Button>
     </form>  
    </div>
    </div>
    
  )
}

export default Login