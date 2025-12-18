import React from 'react'
import { useState} from 'react'
import { lazy } from 'react';
import { ArrowRight } from 'lucide-react';
const OverviewModel=lazy(()=>import('../../models/OverviewModel'));
const PricingModel=lazy(()=>import('../../models/PricingModel'));

function Hero() {


const [overview,setOverviewModal]=useState(false);
const [pricingmodel,setPricingModel]=useState(false);

const closeOverviewModal=()=>setOverviewModal(false);
const closePricingModal=()=>setPricingModel(false);

const handleCloseButtonOverview=(
    <button className='overview-button' onClick={closeOverviewModal}>Close</button>
)
const handleCloseButtonPricing=(
  <button  className='overview-button' onClick={closePricingModal}>Close</button>
)

const mainPricingModel=(
  <PricingModel closePricingModal={closePricingModal} handleCloseButtonPricing={handleCloseButtonPricing}>
<table className='table-master-content'>
<thead>
<tr className='header-master'>
  <th className='table-header-Heading'>Category</th>
  <th className='table-header-Heading'>Description</th>
  <th className='table-header-Heading'>Ticket Price (PKR)</th>
  <th className='table-header-Heading'>Special Features</th>
</tr>
</thead>
<tbody>
  <tr className='table-flow-content'>
      <td className='table-header heading'>Now Showing</td>
      <td className='table-header content'>Discover the latest movies currently running in theaters near you.</td>
      <td  className='table-header content'>800 – 1,200</td>
      <td  className='table-header content'>Regular & recliner seats, instant booking confirmation</td>
  </tr>
  <tr className='table-flow-content'>
      <td className='table-header heading'>Coming Soon</td>
      <td className='table-header content'>Stay ahead — preview and pre-book tickets for upcoming releases.</td>
      <td  className='table-header content'>1,000 – 1,500</td>
      <td  className='table-header content'>Early access booking, pre-release offers</td>
  </tr>
  <tr className='table-flow-content'>
      <td className='table-header heading'>Family & Kids</td>
      <td className='table-header content'>Enjoy fun, family-friendly films perfect for all age groups.</td>
      <td  className='table-header content'>Family Pack 2,800 (4 tickets)</td>
      <td  className='table-header content'>Child discounts, weekend offers</td>
  </tr>
  <tr >
      <td className='table-header heading'>Private Theater Booking</td>
      <td className='table-header content'>Reserve an entire theater for private screenings or special events.</td>
      <td  className='table-header content'>Starting from 25,000</td>
      <td  className='table-header content'>Custom playlist, private screen, snacks available</td>
  </tr>
</tbody>
</table>
  </PricingModel>
)




const mainOverviewModal=(
<OverviewModel closeOverviewModal={closeOverviewModal} handleCloseButtonOverview={handleCloseButtonOverview}>
    <div className='overview-content'>
   <p className='overview-para'>
    <span className='overview-span'>CineWave</span> is a modern, customer-focused movie ticket booking platform that brings the magic of cinema closer to you. Founded with a vision to make movie-going seamless and exciting, CineWave allows users to explore films, view real-time showtimes, and book tickets effortlessly — all from one intuitive app.

Our platform connects movie enthusiasts with theaters across the country, offering a fast, secure, and reliable booking experience. With features like <span  className='overview-span'>smart seat selection, real-time movie schedules, and exclusive offers,</span> CineWave ensures you never miss a show you love.

At CineWave, we believe that booking a movie should be as fun as watching it. That’s why we combine technology, design, and data to deliver a personalized entertainment experience — anytime, anywhere.
   </p>
   </div>

</OverviewModel>)


  return (
    <div className='mt-17 lg:mt-22 w-full max-w-7xl mx-auto text-white p-2'>
      <div>

      <h2 className='h-18 font-bold text-center  text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-linear-to-r from bg-blue-400 via-blue-200  to-cyan-400 bg-clip-text text-transparent mb-3'>
        
“Experience the Future of Movie Booking”
      </h2>
      <p className='text-gray-400 px-3 text-base md:text-lg text-center'>A modern cinematic platform delivering seamless booking, smart insights, and personalized entertainment.</p>
      </div>
      <div className='relative gap-3 flex flex-col md:flex-row md:gap-3 lg:gap-5 px-2 py-2 sm:px-4 sm:py-4 md:px-5 md:py-5 lg:py-6 lg:px-6'>
        
    <div className='w-full max-w-7xl mx-auto flex flex-col mt-5 px-3  rounded-xl backdrop-blur-xl shadow-2xl border border-white/10 bg-white/5  py-3 md:flex-row'>
      <div className='relative w-full bg-linear-to-r from-gray-900/20 to-gray-800/20 backdrop-blur-lg rounded-lg px-6 py-5'>
        <h2 className=' bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent  text-xl font-semibold items-center text-center mb-2'>
            App Features And Highlights
        </h2>
        <div className='flex flex-col gap-2 mb-3 text-gray-300'>
            <div>
           <div className='flex gap-2'>
             <img src="/images/music.png"className='master-img' alt="Now Showing"/>
              <p className='text-white'>Easy Movie Booking</p>
           </div>
            <p className='text-gray-300 text-xs sm:text-sm'>
            Book your favorite movie in just a few taps — fast, simple, and secure.
            </p>
           </div>
           <div className='master-total'>
           <div className='img-and-head'>
             <img src='/images/star.png' className='master-img' alt="Real-Time Showtimes"/>
              <p className='text-white'>Real-Time Showtimes</p>
           </div>
            <p className='text-gray-300 text-xs sm:text-sm'>
            Get live movie schedules from nearby cinemas and pick the best slot for you.
            </p>
           </div>
           <div className='master-total'>
           <div className='img-and-head'>
             <img src="/images/plus.png"className='master-img' alt="Smart Seat Selection"/>
              <p className='text-white'>Smart Seat Selection</p>
           </div>
            <p className='text-gray-300 text-xs sm:text-sm'>
            Choose your perfect seat with an interactive seat map for a personalized experience.
            </p>
           </div>
            <div className='master-total'>
           <div className='img-and-head'>
             <img src="/images/data-visualization.png"className='master-img' alt="Exclusive Offers & Discounts"/>
              <p className='text-white'>Exclusive Offers & Discounts</p>
           </div>
            <p className='text-gray-300 text-xs sm:text-sm'>
            Enjoy special deals and cashback on your favorite movie tickets.
            </p>
           </div>
        </div>
        <div className=' mt-5 flex sm:flex sm:items-center sm:justify-center'>
         <button onClick={()=>setOverviewModal(true)} className='group flex items-center gap-1 w-full  sm:w-auto justify-center md:w-auto  rounded-lg text-sm sm:text-base md:text-center bg-linear-to-b from-blue-600 to-blue-400 font-semibold px:6

                   sm:px-8 sm:py-4 py-3 hover:scale-102 transition-all duration-300 cursor-pointer '>
                      
                    <span>Overview</span>
                   
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                   
                   </button>
                    {overview && mainOverviewModal}
                    </div>
        
      </div>
      </div>
       <div className=' w-full max-w-7xl mx-auto flex flex-col mt-5 px-3  rounded-xl backdrop-blur-xl shadow-2xl border border-white/10 bg-white/5  py-3 md:flex-row'>
      <div className='w-full bg-linear-to-r from-gray-900/20 to-gray-800/20 backdrop-blur-lg rounded-lg px-6 py-5'>
      
        <h2 className='bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent  text-xl font-semibold items-center text-center mb-2'>
            Movie Booking Categories
        </h2>
        <div className='flex flex-col gap-2 mb-3 text-gray-300'>
            <div className='master-total'>
           <div className='img-and-head'>
             <img src="/images/game.png"className='master-img' alt="Now Showing"/>
              <p className='text-white'>Now Showing</p>
           </div>
            <p className='text-gray-300 text-xs sm:text-sm'>
            Discover the latest movies currently running in theaters near you.
            </p>
           </div>
           <div >
           <div className='img-and-head'>
             <img src='/images/smile.png' className='master-img' alt="Real-Time Showtimes"/>
              <p className='text-white'>Coming Soon</p>
           </div>
            <p className='text-gray-300 text-xs sm:text-sm'>
            Stay ahead — preview and pre-book tickets for upcoming releases.
            </p>
           </div>
           <div className='master-total'>
           <div className='img-and-head'>
             <img src="/images/code.png"className='master-img' alt="Smart Seat Selection"/>
              <p className='text-white'>Family & Kids</p>
           </div>
            <p className='text-gray-300 text-xs sm:text-sm'>
            Enjoy fun, family-friendly films perfect for all age groups.
            </p>
           </div>
            <div className='master-total'>
           <div className='img-and-head'>
             <img src="/images/data-visualization.png"className='master-img' alt="Exclusive Offers & Discounts"/>
              <p className='text-white'>Private Theater Booking</p>
           </div>
            <p className='text-gray-300 text-xs sm:text-sm'>
           Reserve an entire theater for private screenings or special events.
            </p>
           </div>
           
        </div>
       
        <div className=' mt-5 flex sm:flex sm:items-center sm:justify-center'>
         <button onClick={()=>setPricingModel(true)} className='group flex items-center gap-1 w-full  sm:w-auto justify-center md:w-auto  rounded-lg text-sm sm:text-base md:text-center bg-linear-to-b from-blue-600 to-blue-400 font-semibold px:6 cursor-pointer

                   sm:px-8 sm:py-4 py-3 hover:scale-102 transition-all duration-300  '>
                      
                    <span>Pricing Model</span>
                   
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                   
                   </button>
                     {pricingmodel && mainPricingModel}
                    </div>
      
      </div>
      </div>
      </div>
   </div>
  )
}

export default Hero