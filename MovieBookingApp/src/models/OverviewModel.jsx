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
    <div className='portal-root-css' onClick={closeOverviewModal}>
       <div className='portal-root-inner-div'>
      {children}
       {handleCloseButtonOverview}
       </div>    
    </div>
    </>,
    document.querySelector('.portal-root')
  )
}

export default OverviewModel