import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'


function NavBarMenuModal({closeMenuButton,children,handleCloseMenuButton}) {
  useEffect(()=>{
     document.body.style.overflowY='hidden'
     return ()=>{
   document.body.style.overflowY='scroll'
     }
  },[])
  
    return ReactDOM.createPortal(
    <>
    <div className='dropdown-mega-cont' onClick={closeMenuButton}>
        <div className='dropdown-cont'>
          {children}
          {/* {handleCloseMenuButton} */}
        </div>
    </div>
    </>,
     document.querySelector('.portal-root')
  )
}

export default NavBarMenuModal