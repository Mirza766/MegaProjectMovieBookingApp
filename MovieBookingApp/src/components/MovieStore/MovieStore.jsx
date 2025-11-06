import React, { useEffect } from 'react'
import { getMovieData } from '../../redux/Product/ProductReducers'
import { useDispatch,useSelector } from 'react-redux'
import { productList } from '../../redux/Product/ProductActions'
import { addDataToCart,removeDataFromCart,deleteDataFromCart } from '../../redux/CartData/CartDataActions'
import Header from './Header'

function MovieStore() {


useEffect(()=>{
  dispatch(productList())
},[])


  const dispatch=useDispatch();


const MovieData=useSelector((state)=>state.getMovieData);
console.log(MovieData);

  return (
    <div>

   
  <div className='movieproduct-container'>
    <h2>Movie Box</h2>
    
    {MovieData?.map((movie)=>(
      <div className='movieproductMasterCont' key={movie.id}>

      <h3>{movie.title}</h3>
      <p><b>Movie: </b>{movie.release_year}</p>
      <p><b>Price: </b>{movie.price}</p>
      <div>
      <button onClick={()=>dispatch(addDataToCart(movie))}>Add to Cart</button>
      <button onClick={()=>dispatch(deleteDataFromCart(movie))}>Remove from Cart</button>
      </div>
      </div>
     
    ))}
   <button onClick={()=>dispatch(removeDataFromCart())}>Empty Cart</button>
  </div>
  <Header/>
     </div>
  )
}

export default MovieStore