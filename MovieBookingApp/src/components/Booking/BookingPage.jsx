import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setMovie,
  toggleSeat,
  confirmBooking,
  setTime,
  setDate,
} from "../../redux/Booking/BookingActions";
import { useForm } from "react-hook-form";
import "../stylingSheets/BookingPage.css";

const BookingPage = () => {
  const dispatch = useDispatch();
  const { movies, selectedMovie, selectedSeats, bookingDetails, selectedDate, selectedTime } =
    useSelector((state) => state.MovieBooking);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  React.useEffect(() => {
    console.log("Updated bookings:", bookingDetails);
  }, [bookingDetails]);

  const onSubmit = (data) => {
    if (!selectedMovie || !selectedDate || !selectedTime || selectedSeats.length === 0) {
      alert("Please select movie, date, time, and at least one seat!");
      return;
    }

    const bookingPayload = {
      ...data, 
    };

    dispatch(confirmBooking(bookingPayload));

   
    reset({ name: "", email: "", phone: "" });
  
  };

  const handleMovieChange = (e) => {
    dispatch(setMovie(Number(e.target.value)));
  };

  const handleDateChange = (e) => {
    dispatch(setDate(e.target.value));
  };

  const handleTimeChange = (e) => {
    dispatch(setTime(e.target.value));
  };

  const renderSeats = () => {
    if (!selectedMovie || !selectedDate || !selectedTime) {
      return <p className="renderSeatPara">Please select movie, date, and time to see seats.</p>;
    }

    const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const showKey = `${selectedDate}_${selectedTime}`;
    const bookedSeats = selectedMovie.showtimes?.[showKey] || [];

    return (
      <div className="seat-grid">
        {rows.map((row) =>
          cols.map((col) => {
            const seatId = `${row}${col}`;
            const isBooked = bookedSeats.includes(seatId);
            const isSelected = selectedSeats.includes(seatId);
            let seatClass = "seat";
            if (isBooked) seatClass += " booked";
            else if (isSelected) seatClass += " selected";

            return (
              <div
                key={seatId}
                className={seatClass}
                onClick={() => !isBooked && dispatch(toggleSeat(seatId))}
              >
                {seatId}
              </div>
            );
          })
        )}
      </div>
    );
  };

  return (
    <div className="booking-container">
      <h2 className="master-head-booking">Movie Booking Page</h2>

      <form className="booking-form-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-grid">
        
          <div className="booking-form-master">
            <label className="bookinglabel">Name:</label>
            <input
              className="bookingInput"
              {...register("name", { required: true })}
              placeholder="Your Name"
            />
          </div>
          <div className="booking-form-master">
            <label className="bookinglabel">Email:</label>
            <input
              className="bookingInput"
              {...register("email", { required: true })}
              placeholder="Your Email"
            />
          </div>
          <div className="booking-form-master">
            <label className="bookinglabel">Phone:</label>
            <input
              className="bookingInput"
              {...register("phone", { required: true })}
              placeholder="Your Phone Number"
            />
          </div>

         
          <div className="booking-form-master">
            <label className="bookinglabel">Movie:</label>
            <select
              className="bookingInput"
              value={selectedMovie?.id || ""}
              onChange={handleMovieChange}
            >
              <option value="">-- Select Movie --</option>
              {movies.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.title}
                </option>
              ))}
            </select>
          </div>

         
          <div className="booking-form-master">
            <label className="bookinglabel">Date:</label>
            <input
              className="bookingInput"
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>

         
          <div className="booking-form-master">
            <label className="bookinglabel">Time:</label>
            <select className="bookingInput" value={selectedTime} onChange={handleTimeChange}>
              <option value="">-- Select Time --</option>
              <option>3:00 PM</option>
              <option>6:00 PM</option>
              <option>9:00 PM</option>
            </select>
          </div>

       
          <div className="booking-form-master">
            <h3 className="renderSeatHead">Select Seats</h3>
            {renderSeats()}
          </div>
        </div>

        <button type="submit" className="confirm-btn">
          Confirm Booking
        </button>
      </form>

     
      <div className="confirmed-section">
        <h3>Your Confirmed Bookings</h3>
        <ul>
          {bookingDetails.map((booking) => (
            <li key={booking.id}>
              Booking ID: {booking.id} <br />
              Movie: {booking.movie} <br />
              Seats: {booking.seats.join(", ")} <br />
              Date: {booking.date} <br />
              Time: {booking.time} <br />
              Timestamp: {booking.timestamp ? new Date(booking.timestamp).toLocaleString() : "-"}{" "}
              <br />
              User: {booking.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookingPage;
