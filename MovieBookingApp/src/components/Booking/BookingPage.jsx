import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useForm} from "react-hook-form"
import { confirmBooking, setMovie } from '../../redux/Booking/BookingActions'


function BookingPage() {

  const dispatch=useDispatch()
  const {movies,selectedSeats,selectedMovie}=useSelector((state)=>state.MovieBooking)
const {register,handleSubmit,reset}=useForm({
    defaultValues:{
        name:'',
        email:'',
        phone:'',
        movie:'',
        date:'',
        time:'',
    }
})

const onSubmission=(data)=>{
 dispatch(confirmBooking(data));
 reset();
 alert('Booking Confirmed')
}

const renderSeats=()=>{

}


const handleMovieChange=(e)=>{
    dispatch(setMovie(e.target.value));
}

  return (
    <div>
     <h2>Movie Booking Page</h2>
     
     <form onSubmit={handleSubmit(onSubmission)}>
<div>
    <label>Name: </label>
    <input placeholder='Enter your name' {...register('name',{required:true})}/>
</div>
<div>
    <label>Email: </label>
    <input placeholder='Enter your email' {...register('email',{required:true})}/>
</div>
<div>
    <label>Phone Number: </label>
    <input placeholder='Enter your phone Number' {...register('phone',{required:true})}/>
</div>
<div>
    <label>Movie: </label>
   <select {...register('movie',{required:true})} onChange={handleMovieChange}>
     <option>--Select Movie--</option>
    {
    movies.map((movie)=>(
        <option key={movie.id} value={movie.id}>
            {movie.title}
        </option>
    ))}
   </select>
</div>
<div>
     <label>Date:</label>
          <select {...register("time", { required: true })}>
            <option value="">-- Select Date --</option>
            <option>8 Tues</option>
            <option>10 Thurs</option>
            <option>7 Wed</option>
          </select>
</div>
<div>
     <label>Time:</label>
          <select {...register("time", { required: true })}>
            <option value="">-- Select Time --</option>
            <option>3:00 PM</option>
            <option>6:00 PM</option>
            <option>9:00 PM</option>
          </select>
</div>
<h3>Select Seats</h3>
{renderSeats()}
<button type='submit' >Confirm Booking</button>
</form>
    </div>
  )
}

export default BookingPage