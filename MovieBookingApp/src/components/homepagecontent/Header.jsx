import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import "../stylingSheets/NavbarImg.css";
import { lazy } from 'react';
const NavBarMenuModal=lazy(()=>import('../../models/NavBarMenuModal'))
const SideBarMenuModel=lazy(()=>import('../../models/SideBarMenuModel'))
const NavContentMenu=lazy(()=>import('../../models/NavContentMenu'))



function Header() {
const [openSideBar,setOpenSideBar]=useState(false);
const [isOpen,setisOpen]=useState(false);
const [openNavContent,setNavContent]=useState(false);


const closeMenuButton=()=>setisOpen(false);
const closeSideBar=()=>setOpenSideBar(false);
const closeNavContent=()=>setNavContent(false);


const handleCloseSideBarButton=(
  <button className='NavImg-btn' onClick={closeSideBar}>Close</button>
)

const handleCloseNavContent=(
  <button className='NavImg-btn' onClick={closeNavContent}>Close</button>
)

const handleCloseMenuButton=(
  <button className='NavImg-btn' onClick={closeMenuButton}>Close</button>
)

const mainMenu=(
  
  <NavBarMenuModal closeMenuButton={closeMenuButton} handleCloseMenuButton={handleCloseMenuButton}>
    <Link to='signup'>
  <p className='nav-conten'>Sign/up</p>
    </Link>
    <Link to='login'>
  <p className='nav-conten'>login</p>
    </Link>
  <p style={{cursor:'pointer'}} onClick={()=>alert("User Logout Successfully")} className='nav-conten'>logout</p>
  </NavBarMenuModal>
)

const SidebarMenu=(
  <SideBarMenuModel handleCloseSideBarButton={handleCloseSideBarButton} closeSideBar={closeSideBar}>
   <div className='sidebarlinkcontent'>
    <Link className='SidebarLink' to='/loginPage'>Login Data</Link>
    <Link className='SidebarLink' to='/signUpPage'>Sign Up Data</Link>
    <Link className='SidebarLink' to='/contactusdata'>Contact Us Data</Link>
    <Link className='SidebarLink' to='/dataentrycont'>Subscription Data</Link>
    <Link className='SidebarLink' to='/bookDataRetrieve'>Booking Data</Link>
    <Link className='SidebarLink' to='/cartData'>Cart Data</Link>
   </div>
  </SideBarMenuModel>
)

const NavContentMenuTotal=(
  <NavContentMenu handleCloseNavContent={handleCloseNavContent} closeNavContent={closeNavContent}>
   <div className='sidebarlinkcontent'>
    <Link className='SidebarLink' to='/'>Home</Link>
    <Link className='SidebarLink' to='/contact'>Contact Us</Link>
    <Link className='SidebarLink' to='/about'>About Us</Link>
</div>
  </NavContentMenu>
)

  return (

  <>
  <div className='Navbar'>
    <div className='image'>
      < i onClick={()=>setOpenSideBar(true)} className="ri-menu-line"></i>
   <img style={{height:'80px', width:'100px'}} className='Navbar-logo' src='/images/christmas_2012_new_2861.jpg' alt='logoImage'/>
     {
      openSideBar && SidebarMenu
     }
    </div>
    <div className='container'>
     <div className='Navbar-Buttons'>
          <Link to='/'  className='Nav-btns img1'>Home</Link>
          <Link to='/about' className='Nav-btns img2'>About Us</Link>
          <Link to='/contact'  className='Nav-btns img3' >Contact Us</Link>
     </div>
     <div  className='responsive-sidebar-contact'>
      < i onClick={()=>setNavContent(true)} className="ri-arrow-left-down-box-fill"></i>
     {
      openNavContent && NavContentMenuTotal
     }
     </div>
     <div   className='sign-up-image'>
        <img onClick={()=>setisOpen(true)}  className='User-logo' style={{height:'40px' ,width:'40px',cursor:'pointer'}} src='/images/User-logo.png' />
     {
        isOpen && mainMenu
      }
     </div>
    </div>
  </div>
  </>
  )
}

export default Header