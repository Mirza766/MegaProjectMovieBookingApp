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

<section className='max-w-7xl mx-auto mt-20 '>
    <div className=' flex flex-col overflow-x-auto '>
    <h2 className=' text-center mb-4 md:mb-5 justify-center bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent font-bold  bg-clip-text text-2xl sm:text-3xl lg:text-5xl '>Cart Data</h2>
   <p className='text-gray-300 font-semibold text-xl md:text-2xl lg:text-3xl text-center mb-4'>You Have purchased <strong className='bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400  text-transparent bg-clip-text'> {TotalLength} items</strong>  in your cart.</p>
   <div className='px-3 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-4'>
        <div className=' border border-slate-500  '>
     <table  className='w-full  border-collapse '>
        <thead  >
            <tr className='bg-slate-500' >
                <th className='p-3 text-white text-left'>Name</th>
                <th  className='p-3 text-white text-left'>Quantity</th>
                <th  className='p-3 text-white text-left'>Price</th>
                <th  className='p-3 text-white text-left'>Language</th>
                <th  className='p-3 text-white text-left'>Duration</th>
                <th  className='p-3 text-white text-left'>Release Year</th>
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
    </section>
  )
}

export default MovieCart