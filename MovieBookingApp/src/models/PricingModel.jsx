import React from 'react'
import ReactDOM from 'react-dom'
import { useEffect } from 'react'
function PricingModel({handleCloseButtonPricing,children,closePricingModal}) {
useEffect(()=>{
    document.body.style.overflowY='hidden'
    return ()=>{
        document.body.style.overflowY='scroll'
    }
},[])


  return ReactDOM.createPortal(
    <>
    <div  className='px-2 text-sm portal-root-css bg-linear-to-r from-blue-400 via-blue-200 to-cyan-300 text-transparent bg-clip-text' onClick={closePricingModal}>
     <div className='flex flex-col w-full md:w-xl lg:w-3xl'>
    {children}

     </div>
    </div>
    </>,
     document.querySelector('.portal-root')
  )
}

export default PricingModel