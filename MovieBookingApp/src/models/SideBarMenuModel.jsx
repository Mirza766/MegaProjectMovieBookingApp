import React from 'react'
import ReactDOM from 'react-dom'


function SideBarMenuModel({children, handleCloseSideBarButton,closeSideBar}) {
  return ReactDOM.createPortal(
    <>
    <div className='sidebarMenuCont' onClick={closeSideBar}>
        <div className='sidebarmastercont'>
            {children}
        </div>
    </div>
    </>,
    document.querySelector('.portal-root')
  )
}

export default SideBarMenuModel