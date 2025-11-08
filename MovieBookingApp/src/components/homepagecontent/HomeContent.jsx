import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageGrid from './ImageGrid';
import SubscriptionContent from './SubscriptionContent';
import { lazy } from 'react';
const OverviewModel=lazy(()=>import('../../models/OverviewModel'));
const PricingModel=lazy(()=>import('../../models/PricingModel'));



function HomeContent() {




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
   {/* <div className='main-content'>
   <h2 className='overview-core'>Core Values</h2>
   <div className='para-content'>
   <p className='core-para'><span className='para-span'>Customer First: </span>We design everything with you in mind.</p>
<p className='core-para'><span className='para-span'>Innovation: </span>Constantly improving to offer a smarter way to book.</p>

<p className='core-para'><span className='para-span'>Trust: </span>Secure payments and transparent ticketing.</p>

<p className='core-para'><span className='para-span'>Passion: </span>We love movies — and it shows in our work.</p>
</div>
</div> */}
</OverviewModel>)

  return (
    <>
    <div className='hero-section'>
        <div className='hero-total'>
        <div className='hero-Uppercontent'>
         
        <h2 className='hero-heading'>
            Book your favorite movies in seconds — anywhere, anytime.<span className='hero-boldtext'>It’s Showtime, Anytime.</span>
        </h2>
       
        <div className='hero-btns'>
            <Link to='/search-movie' className='hero-btns-mod'>Search Movie</Link>
           <Link to='/bookmovie' className='hero-btns-mod' >Book a Ticket</Link>
            <Link to='/buy-movie' className='hero-btns-mod' >Visit Store Outlet </Link>
        </div>
        </div>
   <div className='hero-container'>
      <div className='Features-And-Categories'>
        <h2 className='feat-head'>
            App Features And Highlights
        </h2>
        <div className='master-content'>
            <div className='master-total'>
           <div className='img-and-head'>
             <img src="/images/music.png"className='master-img' alt="Now Showing"/>
              <p className='master-text'>Easy Movie Booking</p>
           </div>
            <p className='master-desc'>
            Book your favorite movie in just a few taps — fast, simple, and secure.
            </p>
           </div>
           <div className='master-total'>
           <div className='img-and-head'>
             <img src='/images/star.png' className='master-img' alt="Real-Time Showtimes"/>
              <p className='master-text'>Real-Time Showtimes</p>
           </div>
            <p className='master-desc'>
            Get live movie schedules from nearby cinemas and pick the best slot for you.
            </p>
           </div>
           <div className='master-total'>
           <div className='img-and-head'>
             <img src="/images/plus.png"className='master-img' alt="Smart Seat Selection"/>
              <p className='master-text'>Smart Seat Selection</p>
           </div>
            <p className='master-desc'>
            Choose your perfect seat with an interactive seat map for a personalized experience.
            </p>
           </div>
            <div className='master-total'>
           <div className='img-and-head'>
             <img src="/images/data-visualization.png"className='master-img' alt="Exclusive Offers & Discounts"/>
              <p className='master-text'>Exclusive Offers & Discounts</p>
           </div>
            <p className='master-desc'>
            Enjoy special deals and cashback on your favorite movie tickets.
            </p>
           </div>
        </div>
         <div className='master-btn'>
            <button className='btn-styling' onClick={()=>setOverviewModal(true)}>Overview</button>
            {overview && mainOverviewModal}
        </div>
      </div>
      <div className='Features-And-Categories'>
        <h2 className='feat-head'>
            Movie Booking Categories
        </h2>
        <div className='master-content'>
            <div className='master-total'>
           <div className='img-and-head'>
             <img src="/images/game.png"className='master-img' alt="Now Showing"/>
              <p className='master-text'>Now Showing</p>
           </div>
            <p className='master-desc'>
            Discover the latest movies currently running in theaters near you.
            </p>
           </div>
           <div className='master-total'>
           <div className='img-and-head'>
             <img src='/images/smile.png' className='master-img' alt="Real-Time Showtimes"/>
              <p className='master-text'>Coming Soon</p>
           </div>
            <p className='master-desc'>
            Stay ahead — preview and pre-book tickets for upcoming releases.
            </p>
           </div>
           <div className='master-total'>
           <div className='img-and-head'>
             <img src="/images/code.png"className='master-img' alt="Smart Seat Selection"/>
              <p className='master-text'>Family & Kids</p>
           </div>
            <p className='master-desc'>
            Enjoy fun, family-friendly films perfect for all age groups.
            </p>
           </div>
            <div className='master-total'>
           <div className='img-and-head'>
             <img src="/images/data-visualization.png"className='master-img' alt="Exclusive Offers & Discounts"/>
              <p className='master-text'>Private Theater Booking</p>
           </div>
            <p className='master-desc'>
           Reserve an entire theater for private screenings or special events.
            </p>
           </div>
           
        </div>
        <div className='master-btn'>
            <button className='btn-styling' onClick={()=>setPricingModel(true)}>View Pricing</button>
            {pricingmodel && mainPricingModel}
        </div>
      </div>
   </div>
   </div>
   </div>
   <ImageGrid/>
   <SubscriptionContent/>
    </>
  )
}

export default HomeContent