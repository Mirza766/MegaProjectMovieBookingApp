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

<section className='max-w-7xl mx-auto mt-25 overflow-x-auto '>
    <div className=' flex flex-col  '>
    <h2 className=' text-center mb-4 md:mb-5 justify-center bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent font-bold  bg-clip-text text-2xl sm:text-3xl lg:text-5xl '>Cart Data</h2>
   <p className='text-gray-300 font-semibold text-xl md:text-2xl lg:text-3xl text-center mb-4'>You Have purchased <strong className='bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400  text-transparent bg-clip-text'> {TotalLength} items</strong>  in your cart.</p>
   <div className='px-4 w-full  mt-7 max-w-8xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8'>
        <div className='mb-20 mt-10 border border-slate-500 overflow-x-auto'>
     <table  className='  overflow-x-auto   border-collapse '>
        <thead  >
            <tr className='bg-slate-500 text-xs sm:text-sm md:text-md' >
                <th className='p-1 text-white text-left'>Name</th>
                <th  className='p-1 text-white text-left'>Quantity</th>
                <th  className='p-1 text-white text-left'>Price</th>
                <th  className='p-1 text-white text-left'>Language</th>
                <th  className='p-1 text-white text-left'>Duration</th>
                <th  className='p-1 text-white text-left'>Release Year</th>
            </tr>
        </thead>
        <tbody className='text-xs sm:text-sm md:text-md'>
            {
                MovieCartData?.map((movieData)=>(
               <tr key={movieData.id} className=' text-white bg-slate-700/30'>
                <th className='p-1 sm:p-4 text-white text-left border border-gray-300  text-sm md:text-md lg:text-lg'>{movieData.title}</th>
                 <th className='p-1 sm:p-4 text-white text-left border border-gray-300 text-sm md:text-md lg:text-lg'>{movieData.quantity}</th>
                  <th className='p-1 sm:p-4 text-left border border-gray-300 text-sm md:text-md lg:text-lg text-green-500'>${movieData.price}</th>
                   <th className='p-1 sm:p-4 text-white text-left border border-gray-300 text-sm md:text-md lg:text-lg'>{movieData.language}</th>
                    <th className='p-1 sm:p-4 text-red-500 text-left border border-gray-300 text-sm md:text-md lg:text-lg'>{movieData.duration_minutes} min</th>
                     <th className='p-1 sm:p-4 text-white text-left border border-gray-300 text-sm md:text-md lg:text-lg'>{movieData.release_year}</th>
            </tr>
                ))
             
            }
          
        </tbody>
     </table>
</div>
<div className='mb-10 relative w-full max-w-xl bg-white/5 backdrop-blur-xl rounded-2xl ml-5 lg:ml-0 p-4 shadow-2xl border border-white/10 hover:shadow-blue-400 delay-100 duration-600'>
    <div className='w-full  text-left bg-linear-to-r from-gray-900/10 to-gray-800/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-2xl border border-white/10'>
    <h2 className='text-center text-xl font-bold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400  text-transparent bg-clip-text'>Price Summary</h2>
    <div className='cruse-data'>
    <div className='adjustPrice'>
        <span className='bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400  text-transparent bg-clip-text font-semibold'>Sub Total:</span>
        <span className='text-gray-300'>${subtotal.toFixed(2)}</span>
    </div>
    <div className='adjustPrice'>
        <span className='bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400  text-transparent bg-clip-text font-semibold' >Discount (10% for 3+ items)</span>
        <span className='text-green-500'>${discount.toFixed(2)}</span>
    </div>
      <div className='adjustPrice'>
        <span className='bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400  text-transparent bg-clip-text font-semibold'>Tax:</span>
        <span className='text-rose-500'>${tax.toFixed(2)}</span>
    </div>
      </div>
    <div className='adjustPrice'>
        <span className='bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400  text-transparent bg-clip-text font-semibold'>Final Total:</span>
        <span className='text-gray-300'>${finalTotal.toFixed(2)}</span>
    </div>
    
 
</div>
</div>
</div> 
    </div>
    </section>
  )
}

export default MovieCart