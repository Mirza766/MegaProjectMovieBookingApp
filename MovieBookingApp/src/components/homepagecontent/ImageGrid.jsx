import React from 'react'
import "../stylingSheets/ImageGrid.css";


function ImageGrid() {
  return (
    <section className='Image-Container'>
        <div className='container1'>
            <div className='img-head-desc'>
            <h2 className='img-head'>Experience the Magic on the Big Screen</h2>
            <p className='img-desc'>Step into the world of cinema — browse the latest blockbusters, fan favorites, and hidden gems.</p>
             </div>
             <div className='img-grid'>
               <div className='img-items item-1'>
                 <img src='/images/boston-public-library-b45fD241t-s-unsplash.jpg' alt='<asonry Image 1'/>
               </div>
               <div className='img-items item-2'>
                 <img src='/images/boston-public-library-plrJC7PQkKc-unsplash.jpg' alt='<asonry Image 1'/>
               </div>
               <div className='img-items item-3'>
                 <img src='/images/jeet-dhanoa-tGHkC5ntUGc-unsplash.jpg' alt='<asonry Image 1'/>
               </div>
               <div className='img-items item-4'>
                 <img src='/images/jenya-shportyak-PKU-DYHHi54-unsplash.jpg' alt='<asonry Image 1'/>
               </div>
               <div className='img-items item-5'>
                 <img src='/images/6604188.jpg' alt='<asonry Image 1'/>
               </div>
               <div className='img-items item-6'>
                <img src='/images/sung-jin-cho--Er7Hzoe-Pk-unsplash.jpg' alt='<asonry Image 1'/>
                 
               </div>
               <div className='img-items item-7'>
                 <img src='/images/avg.jpg' alt='<asonry Image 1'/>
               </div>
             </div>

        </div>
    </section>
  )
}

export default ImageGrid