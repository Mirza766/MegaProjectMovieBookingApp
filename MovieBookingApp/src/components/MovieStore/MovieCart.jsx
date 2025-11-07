import React from 'react'
import Header from '../homepagecontent/Header'
import "../stylingSheets/MovieCart.css";
import { useSelector } from 'react-redux';


function MovieCart() {
    



  const MovieCartData=useSelector((state)=>state.getCartData)
  const TotalLength=MovieCartData.length
  const subtotal=MovieCartData.reduce((sum,item)=>sum+item.price,0);
  const discount=MovieCartData.reduce((sum,item)=>{
    return item.quantity>=3?sum+item.price*item.quantity*0.1:sum
  },0)
const tax=((subtotal-discount)*0.02);
const finalTotal=subtotal-discount+tax;


    return (


    <div className='CartItems-container'>
    <h2 className='cartData-head'>Cart Data</h2>
   <p className='cartDataPara'>You Have purchased <strong> {TotalLength}</strong> items in your cart.</p>
   <div className='CartItems-master-cont'>
        <div className='CartItems-submaster-cont'>
     <table  className='tablecontainer'>
        <thead >
            <tr className='headofCart' >
                <th className='thtagshead'>Name</th>
                <th  className='thtagshead'>Quantity</th>
                <th  className='thtagshead'>Price</th>
                <th  className='thtagshead'>Language</th>
                <th  className='thtagshead'>Duration</th>
                <th  className='thtagshead'>Release Year</th>
            </tr>
        </thead>
        <tbody>
            {
                MovieCartData?.map((movieData)=>(
               <tr key={movieData.id} className='headinsideCart'>
                <th className='thtags'>{movieData.title}</th>
                 <th className='thtags'>{movieData.quantity}</th>
                  <th className='thtags'>${movieData.price}</th>
                   <th className='thtags'>{movieData.language}</th>
                    <th className='thtags'>{movieData.duration_minutes} min</th>
                     <th className='thtags'>{movieData.release_year}</th>
            </tr>
                ))
             
            }
          
        </tbody>
     </table>
</div>
<div className='CartDataPriceContainer'>
    <h2 className='summ-price'>Price Summary</h2>
    <div className='cruse-data'>
    <div className='adjustPrice'>
        <span className='Data-paraCont'>Sub Total:</span>
        <span>${subtotal.toFixed(2)}</span>
    </div>
    <div className='adjustPrice'>
        <span >Discount (10% for 3+ items)</span>
        <span className='Data-paraCont red'>${discount.toFixed(2)}</span>
    </div>
      <div className='adjustPrice'>
        <span className='Data-paraCont'>Tax:</span>
        <span>${tax.toFixed(2)}</span>
    </div>
      </div>
    <div className='adjustPrice'>
        <span className='Data-paraCont'>Final Total:</span>
        <span>${finalTotal.toFixed(2)}</span>
    </div>
    
 
</div>
</div> 
    </div>
  )
}

export default MovieCart