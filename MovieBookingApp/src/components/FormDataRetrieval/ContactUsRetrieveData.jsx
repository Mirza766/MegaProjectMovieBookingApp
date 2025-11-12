import React, { useCallback, useMemo } from 'react'
import {useNavigate} from 'react-router-dom'
import { useSelector} from 'react-redux'
import { ContactUsFormData } from '../../redux/ContactUs/ContactUsReducer'
import { editContactUsData,deleteContactUsData,emptyContactUsData } from '../../redux/ContactUs/ContactUsActions';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import "../stylingSheets/ContactUsRetrieveData.css";


const ContactCard=React.memo(({user,onEdit,onDelete})=>{
console.log('Rendering Contact Card ')
return (
  <div className='contact-retrieve-data-container' >
        <p  className='cont-retrieve-data-para'><span className='cont-retrieve-data'>User ID: </span>{user.id}</p>
        <p className='cont-retrieve-data-para'><span className='cont-retrieve-data'>Full Name: </span>{user.fullName}</p>
        <p className='cont-retrieve-data-para'><span className='cont-retrieve-data'>Email: </span>{user.email}</p>
        <p className='cont-retrieve-data-para'><span className='cont-retrieve-data'>Query type: </span>{user.queryType}</p>
        <p className='cont-retrieve-data-para'><span className='cont-retrieve-data'>Phone Number: </span>{user.phoneNumber}</p>
        <p className='cont-retrieve-data-para'><span className='cont-retrieve-data'>Message: </span>{user.message}</p>
        <div className='retrieve-btn-div'>
            <button className="form-btn retrieve" onClick={()=>onEdit(user.id)}>Edit</button>
            <button className="form-btn retrieve" onClick={()=>onDelete(user.id)}>Delete Data</button>
        </div>
        </div>
)

})


function ContactUsRetrieveData() {

const dispatch=useDispatch();
const navigate=useNavigate();
const ContactUsUsers=useSelector((state)=>state.ContactUsFormData);


const ClearData=useCallback((id)=>dispatch(deleteContactUsData(id)),[dispatch])

const onEdit=useCallback((id)=>navigate(`/contactusedit/${id}`),[navigate])


    return (
   <div className='cont-retrieve-masterclass'>
   
      <h2 className='heading-retrieve'>Contact Us Users Global Data</h2>
    <div className='contactus-retrieve-master'>
   
     {
      ContactUsUsers.map((user)=>(
        <ContactCard key={user.id} user={user} onEdit={onEdit} onDelete={ClearData}/>
      ))
     }
        </div>
   </div>
  )
}

export default ContactUsRetrieveData