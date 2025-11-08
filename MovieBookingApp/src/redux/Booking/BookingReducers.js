import { SET_MOVIE,TOGGLE_SEAT,CONFIRM_BOOKING } from "./BookingConstants";

const initialState={
    movies:[
   {id:1, title:'Inception', bookedSeats:['A1','A2']},
    {id:2, title:'Interstellar', bookedSeats:['B1']},     {id:3, title:'The dark Knight', bookedSeats:[]}
    ],
    selectedSeats:[],
    bookingDetails:[],
    selectedMovie:null
}


export const MovieBooking=(state=initialState,action)=>{
    switch(action.type){
             case SET_MOVIE:
            return{
         ...state,
         selectedMovie:state.movies.find((movie)=>movie.id===Number(action.payload)),
         selectedSeats:[]   
            }
        case TOGGLE_SEAT:
         const seat=action.payload;
         const selected=state.selectedSeats.includes(seat)?
         state.selectedSeats.filter((movieSeat)=>movieSeat!==seat):[...state.selectedSeats,seat];
         return {...state,selectedSeats:selected}
        case CONFIRM_BOOKING:
            if (!state.selectedMovie) return state
            const updatedMovies=state.movies.map((movie)=>
            movie.id===state.selectedMovie.id)?
            {...movie,bookedSeats:[...movie.bookedSeats,...state.selectedSeats]}:movie 
            return{
             ...state.bookingDetails,
             movies:updatedMovies,
             bookingDetails:[
                ...state.bookingDetails,
                {
                    ...action.payload,
                    movie:state.selectedMovie.title,
                    seats:state.selectedSeats,
                }
             ],
             selectedSeats:[],
            };
            default:
                return state;
        }
}

export default MovieBooking