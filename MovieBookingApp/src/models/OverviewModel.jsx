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
    <div className='portal-root-css px-2   text-sm ' onClick={closeOverviewModal}>
       <div className='portal-root-inner-div  not-first  max-w-xl lg:w-3xl w-full'>
      {children}

       </div>    
    </div>
    </>,
    document.querySelector('.portal-root')
  )
}

export default OverviewModel