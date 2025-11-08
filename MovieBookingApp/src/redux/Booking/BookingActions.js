import { SET_MOVIE,TOGGLE_SEAT,CONFIRM_BOOKING } from "./BookingConstants"


export const setMovie=(movieID)=>{
return {
    type:SET_MOVIE,
    payload:movieID
}
}


export const toggleSeat=(seat)=>{
    return{
        type:TOGGLE_SEAT,
        payload:seat
    }
}

export const confirmBooking=(seat)=>{
    return {
        type:CONFIRM_BOOKING,
        payload:seat
    }
}