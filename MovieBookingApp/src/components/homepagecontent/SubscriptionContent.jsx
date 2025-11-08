import React from 'react'
import "../stylingSheets/Subscription.css";
import SubscriptionContext from '../context/SubscriptionContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';



function SubscriptionContent() {
    

const navigate=useNavigate();



  const {AddSubscription}=useContext(SubscriptionContext);

const handleSubscriber=(planName, price)=>{
    AddSubscription({planName,price});
    navigate('/bookingpage');
}


  return (
    <>

    <div className='subsc-container'>
        <div className='head-div'>
           <h2 className='subs-heading'>
            Choose Your Perfect Movie Experience
           </h2>
        </div>
        <div className='subsc-cards'>
           <div className='subsc-card-data'>
            <div className='subsc-upper-total'>
              <div className='subsc-img-text'>
                <img className='subsc-img img-dup' src='/images/Featured icon.png'/>
                <p className='subsc-para'>Basic Pass — “Your Ticket to the Big Screen”</p>
              </div>
              <div className='price-div'>
              <p className='subsc-price'>£80 / year</p>
              </div>
              </div>
              <div className='subsc-content'>
                 <div className='icon-content'>
                    <img className='subsc-img ' src='/images/Frame.png'/>
                 <p className='subsc-inner-cont'>
                    Book up to 2 tickets per month
                 </p>
                 </div>
                  <div className='icon-content'>
                    <img className='subsc-img' src='/images/Frame.png'/>
                 <p className='subsc-inner-cont'>
                    Access to Standard
                 </p>
                 </div>
                 <div className='icon-content'>
                    <img className='subsc-img' src='/images/Frame.png'/>
                 <p className='subsc-inner-cont'>
                   Early-bird showtimes available
                 </p>
                 </div>
                 <div className='icon-content'>
                    <img className='subsc-img' src='/images/Frame.png'/>
                 <p className='subsc-inner-cont'>
                    Watch trailers & explore movie details
                 </p>
                 </div>
                 <div className='icon-content'>
                    <img className='subsc-img' src='/images/Frame.png'/>
                 <p className='subsc-inner-cont'>
                    No hidden fees — just pay as you go
                 </p>
                 </div>
                  <div className='icon-content'>
                    <img className='subsc-img' src='/images/Frame.png'/>
                 <p className='subsc-inner-cont'>
                    Validity of 10 Years Continiously
                 </p>
                 </div>
                 <div className='subsc-btn-div'>
                 <button onClick={()=>handleSubscriber("Basic Pass — Your Ticket to the Big Screen", "£80 / year")} className='subsc-btn'>Subscribe Now</button>
              </div>
              </div>
              
           </div>
            <div className='subsc-card-data'>
            <div className='subsc-upper-total'>
              <div className='subsc-img-text'>
                <img className='subsc-img img-dup' src='/images/Featured icon (1).png'/>
                <p className='subsc-para'>Premium Pass — “Cinema Without Limits”</p>
              </div>
              <div className='price-div'>
              <p className='subsc-price'>£180 / year</p>
              </div>
              </div>
              <div className='subsc-content dup'>
                 <div className='icon-content'>
                    <img className='subsc-img' src='/images/Frame.png'/>
                 <p className='subsc-inner-cont cont-dup'>
                   Book unlimited tickets every month
                 </p>
                 </div>
                  <div className='icon-content'>
                    <img className='subsc-img' src='/images/Frame.png'/>
                 <p className='subsc-inner-cont cont-dup'>
                    Choose Premium & Recliner Seats
                 </p>
                 </div>
                 <div className='icon-content'>
                    <img className='subsc-img' src='/images/Frame.png'/>
                 <p className='subsc-inner-cont cont-dup'>
                   10% off on snacks & drinks
                 </p>
                 </div>
                 <div className='icon-content'>
                    <img className='subsc-img' src='/images/Frame.png'/>
                 <p className='subsc-inner-cont cont-dup'>
                   Priority access to new releases
                 </p>
                 </div>
                 <div className='icon-content'>
                    <img className='subsc-img' src='/images/Frame.png'/>
                 <p className='subsc-inner-cont cont-dup'>
                    Enjoy exclusive member-only screenings
                 </p>
                 </div>
                 <div className='icon-content'>
                    <img className='subsc-img' src='/images/Frame.png'/>
                 <p className='subsc-inner-cont cont-dup'>
                    Cancel anytime — no commitment needed
                 </p>
                 </div>
                 <div className='subsc-btn-div'>
                 <button onClick={()=>handleSubscriber("Premium Pass — “Cinema Without Limits", "£180 / year")} className='subsc-btn'>Subscribe Now</button>
              </div>
              </div>
              
           </div>
            <div className='subsc-card-data'>
            <div className='subsc-upper-total'>
              <div className='subsc-img-text'>
                <img className='subsc-img img-dup' src='/images/Featured icon.png'/>
                <p className='subsc-para'>VIP Experience — “The Ultimate Movie Night”</p>
              </div>
              <div className='price-div'>
              <p className='subsc-price'>£380 / year</p>
              </div>
              </div>
              <div className='subsc-content dup2'>
                 <div className='icon-content'>
                    <img className='subsc-img' src='/images/Frame.png'/>
                 <p className='subsc-inner-cont cont-dup'>
                    Unlimited bookings + private theater access
                 </p>
                 </div>
                  <div className='icon-content'>
                    <img className='subsc-img' src='/images/Frame.png'/>
                 <p className='subsc-inner-cont cont-dup'>
                    Complimentary snacks & drinks
                 </p>
                 </div>
                 <div className='icon-content'>
                    <img className='subsc-img' src='/images/Frame.png'/>
                 <p className='subsc-inner-cont cont-dup'>
                   Dolby Atmos / IMAX show access
                 </p>
                 </div>
                 <div className='icon-content'>
                    <img className='subsc-img' src='/images/Frame.png'/>
                 <p className='subsc-inner-cont cont-dup'>
                    Invite up to 3 guests free
                 </p>
                 </div>
                 <div className='icon-content'>
                    <img className='subsc-img' src='/images/Frame.png'/>
                 <p className='subsc-inner-cont cont-dup'>
                    Get special event invites & backstage passes
                 </p>
                 </div>
                 <div className='icon-content'>
                    <img className='subsc-img' src='/images/Frame.png'/>
                 <p className='subsc-inner-cont cont-dup'>
                    Luxury. Comfort. Exclusivity — all in one pass.
                 </p>
                 </div>
                 <div className='subsc-btn-div'>
                 <button  onClick={()=>handleSubscriber("VIP Experience — “The Ultimate Movie Night", "£380 / year")} className='subsc-btn'>Subscribe Now</button>
              </div>
              </div>
              
           </div>
        </div>
    </div>
    </>
  )
} 

export default SubscriptionContent