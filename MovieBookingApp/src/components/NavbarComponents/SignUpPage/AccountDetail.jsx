import React from 'react'
import {useFormContext,Controller} from 'react-hook-form'
import {Button,Checkbox,TextField,FormControlLabel, FormLabel} from '@mui/material'
import '../../stylingSheets/SignUp.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

function AccountDetail() {

const {control,watch}=useFormContext();
const password=watch('password');
    return (

    <div className='detail-container'>
        <h2 className='detail-head'>Step 1: Account Details</h2>
         <div className='detail-form'>
         <Controller
         name='fullname'
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
        />
       )}
    />

<Controller
         name='email'
         control={control}
         rules={{required:'Email is Required is required',pattern:{
            value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,

         },
         validate:{
            emailAvailable:async(fieldValue)=>{
               const response=await fetch(`http://localhost:3000/users?email=${fieldValue}`);
               const data=await response.json();
               return data.length===0 || "Email Already Exists Exists"
            }
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
        />
       )}
    />


     <Controller
         name='password'
         control={control}
         rules={{required:'Password is required',minLength:{
           value:8,
           message:'Password Must be atleast 8 characters'
        }  
    }}
       render={({field,fieldState})=>(
        <TextField
        {...field}
        fullWidth
        margin='normal'
        label='Password'
        type='password'
        error={!!fieldState.error}
        helperText={fieldState.error?.message}
        />
       )}
    />
     <Controller
         name='confirmPassword'
         control={control}
         rules={{required:'Password is required',minLength:{
           value:8,
           message:'Password Must be atleast 8 characters'
        },
        validate:(value)=>
           value===password || 'Passwords Donot Match'
        
    }}
       render={({field,fieldState})=>(
        <TextField
        {...field}
        fullWidth
        margin='normal'
        label='Confirm Password'
        type='password'
        error={!!fieldState.error}
        helperText={fieldState.error?.message}
        />
       )}
    />



    <Controller
    name='dob'
    control={control}
    rules={{required:'Date of Birth is required'}}
    render={({field,fieldState})=>(
      <div className='date-picker-div'>
      <DatePicker placeholderText='Select Date'
        className='date-input'
      selected={field.value}
      onChange={(date)=>field.onChange(date)}
      dateFormat='dd/MM/yyy'
      showMonthDropdown
      showYearDropdown
      dropdownMode='select'
      />
      {fieldState.error && (
              <p className='date-error'>{fieldState.error.message}</p>
            )}
      </div>
    )}
    />
         </div>
    </div>
  )
}

export default AccountDetail