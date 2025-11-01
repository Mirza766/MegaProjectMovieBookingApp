import React from 'react';
import {Link} from 'react-router-dom';
import NavBarMenuModal from '../../models/NavBarMenuModal';
import { useState } from 'react';
import "../stylingSheets/NavbarImg.css";
function Header() {

const [isOpen,setisOpen]=useState(false);
const closeMenuButton=()=>setisOpen(false);

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
  return (

  <>
  <div className='Navbar'>
    <div  className='image'>
   <img style={{height:'80px', width:'100px'}} className='Navbar-logo' src='/images/christmas_2012_new_2861.jpg' alt='logoImage'/>
     
    </div>
    <div className='container'>
     <div className='Navbar-Buttons'>
          <Link to='/'  className='Nav-btns img1'>Home</Link>
          <Link to='/about' className='Nav-btns img2'>About Us</Link>
          <Link to='/contact'  className='Nav-btns img3' >Contact Us</Link>
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