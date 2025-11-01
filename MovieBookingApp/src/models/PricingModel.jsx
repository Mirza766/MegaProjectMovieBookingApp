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
    <div  className='portal-root-css' onClick={closePricingModal}>
     <div className='portal-root-inner-div'>
    {children}
     {handleCloseButtonPricing}
     </div>
    </div>
    </>,
     document.querySelector('.portal-root')
  )
}

export default PricingModel