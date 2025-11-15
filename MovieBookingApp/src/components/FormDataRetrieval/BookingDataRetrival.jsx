import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import "../stylingSheets/ContactUsRetrieveData.css";



function BookingDataRetrival() {

const {bookingDetails}=useSelector((state)=>state.MovieBooking);

console.log(bookingDetails);



    return (
       <div className='cont-retrieve-masterclass'>
   
      <h2 className='heading-retrieve'>Booked Users Data Bank</h2>
    <div className='contactus-retrieve-master'>
    {
       bookingDetails.map((book)=>{
        const TicketPrice=10*book.seats.length;
        return(
      <div className='contact-retrieve-data-container'>
        <p  className='cont-retrieve-data-para'><span className='cont-retrieve-data'>User ID: </span>{book.id}</p>
        <p className='cont-retrieve-data-para'><span className='cont-retrieve-data'>Full Name: </span>{book.name}</p>
        <p className='cont-retrieve-data-para'><span className='cont-retrieve-data'>Movie: </span>{book.movie}</p> 
        <p className='cont-retrieve-data-para'><span className='cont-retrieve-data'>Email: </span>{book.email}</p>
        <p className='cont-retrieve-data-para'><span className='cont-retrieve-data'>Phone Number: </span>{book.phone}</p>
        <p className='cont-retrieve-data-para'><span className='cont-retrieve-data'>Seats: </span>{book.seats.join(' , ')}</p>
        <p className='cont-retrieve-data-para'><span className='cont-retrieve-data'>Time: </span>{book.time}</p>
         <p className='cont-retrieve-data-para'><span className='cont-retrieve-data'>Timestamp: </span> {book.timestamp ? new Date(book.timestamp).toLocaleString() : "-"}{" "}</p>
         <p className='cont-retrieve-data-para'><span className='cont-retrieve-data'>Total Price: </span>${TicketPrice}</p>
        </div>
        )
})}
        </div>
   </div>
  )
}

export default BookingDataRetrival