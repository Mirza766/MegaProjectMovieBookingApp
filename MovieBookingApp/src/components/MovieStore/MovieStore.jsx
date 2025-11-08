import React, { useEffect } from 'react'
import { getMovieData } from '../../redux/Product/ProductReducers'
import { useDispatch,useSelector } from 'react-redux'
import { productList } from '../../redux/Product/ProductActions'
import { addDataToCart,removeDataFromCart,deleteDataFromCart } from '../../redux/CartData/CartDataActions'
import Header from './Header'
import "../stylingSheets/MovieStore.css";
import BookingPage from '../Subscription/SubscriptionPageDataEntry'
function MovieStore() {


useEffect(()=>{
  dispatch(productList())
},[])


  const dispatch=useDispatch();


const MovieData=useSelector((state)=>state.getMovieData);
console.log(MovieData);

  return (

  <div className='movieproduct-container'>
    <Header/>
    <h2 className='movieproduct-head'>Buy Your Favourate Movie</h2>
    <div className='movieproductData'>
    {MovieData?.map((movie)=>(
      <div className='movieproductMasterCont' key={movie.id}>
      <img className='movieproduct-img' src={movie.poster_url}/>
      <div className='content-mastermovie'>
      <h3>{movie.title}</h3>
      <p className='movieproduct-para'><b>Movie: </b>{movie.release_year}</p>
      <p className='movieproduct-para'><b>Price: </b>{movie.price}</p>
      </div>
      <div className='movieproduct-btns'>
      <button className='movieproduct-btns-inner' onClick={()=>dispatch(addDataToCart(movie))}>Add to Cart</button>
      <button className='movieproduct-btns-inner' onClick={()=>dispatch(deleteDataFromCart(movie))}>Remove from Cart</button>
      </div>
      </div>
     
    ))}
    </div>
   <button className='movieproduct-btns-inner' onClick={()=>dispatch(removeDataFromCart())}>Empty Cart</button>
  
  </div>
   
  )
}

export default MovieStore