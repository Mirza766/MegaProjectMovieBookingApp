import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardContent, Button, CardActions, Grid, Box, Typography, colors } from '@mui/material';
import { emptySignUpData,deleteSignUpData } from '../../redux/SignUp/SignUpActions';
function SignUpPageDataRetrievel() {

  const dispatch = useDispatch();
  const SignUpFormData = useSelector((state) => state.SignUpFormData);
  console.log(SignUpFormData);

  return (
    <>
    <Box  textAlign='center' sx={{ padding: 4, backgroundColor: '#c7ebe9;', color:'#162f72;', fontWeight:'900',}}>
      <Typography variant='h3' align='center'
      marginBottom={6}>
        Sign Up Users Data
      </Typography>
      <Grid  justifyContent={'center'}container spacing={3}>
        {
          SignUpFormData.map((user)=>(
          <Grid item xs={12} sm={6} lg={3} key={user.id}>
        <Card  sx={{boxShadow:4,borderRadius:3}}>
          <CardContent sx={{textAlign:'left'}}>
            <Typography variant='h6' gutterBottom>
              <b>User ID: </b>
              {user.id}
            </Typography>
            <Typography variant='body2'>
              <b>Full Name: </b>{user.fullname}
            </Typography>
             <Typography variant='body2'>
              <b>Email: </b>{user.email}
            </Typography>
             <Typography variant='body2'>
              <b>Date of Birth: </b>{user.dob}
            </Typography>
             <Typography variant='body2'>
              <b>City: </b>{user.city}
            </Typography>
             <Typography variant='body2'>
              <b>Phone Number: </b>{user.phoneNumber}
            </Typography>
            <Typography variant='body2'>
              <b>Payment: </b>{user.payment}
            </Typography>
            <Typography variant='body2'>
              <b>Phone Number: </b>{user.timeSlot}
            </Typography>
             <Typography variant='body2'>
              <b>Notifications: </b>
                
                    {user.notifications[0]}
                    {" "}
                    {user.notifications[1]}
                
              
            </Typography>
             <Button sx={{mt:2}}  fullWidth variant='contained'  onClick={()=>dispatch(deleteSignUpData(user.id))}>Delete</Button>
          </CardContent>
        </Card>
          </Grid>
          ))
        }
      </Grid>
     <Button sx={{mt:4}}  variant='contained'  onClick={()=>dispatch(emptySignUpData())}>Empty List</Button>
    
    </Box>
    </>
  );
}

export default SignUpPageDataRetrievel;
