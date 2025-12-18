import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

function OverviewModel({handleCloseButtonOverview,children,closeOverviewModal}) {

useEffect(()=>{
    document.body.style.overflowY='hidden'
    return ()=>{
        document.body.style.overflowY='scroll'
    }
},[])

    return ReactDOM.createPortal(
        <>
    <div className='px-2 mt-10  text-sm  portal-root-css' onClick={closeOverviewModal}>
       <div className='portal-root-inner-div not-first w-xl lg:w-3xl'>
      {children}

       </div>    
    </div>
    </>,
    document.querySelector('.portal-root')
  )
}

export default OverviewModel