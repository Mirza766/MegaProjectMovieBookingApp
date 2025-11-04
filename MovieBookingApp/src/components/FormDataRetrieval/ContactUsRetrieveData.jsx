import React from 'react'
import { useSelector } from 'react-redux'
import { ContactUsFormData } from '../../redux/ContactUs/ContactUsReducer'
import { editContactUsData,deleteContactUsData,emptyContactUsData } from '../../redux/ContactUs/ContactUsActions';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import "../stylingSheets/ContactUsRetrieveData.css";




function ContactUsRetrieveData() {

const { reset, formState, register, setError, handleSubmit,setValue } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      queryType: "Booking Issue",
      message: "",
    },
    mode: "onChange",
  });

  
const { errors,isSubmitting,isSubmitSuccessful } = formState;

const [editId,setEditId]=useState(null);
const dispatch=useDispatch();

  const ContactUsUsers=useSelector((state)=>state.ContactUsFormData);
  console.log(ContactUsUsers);

const setEditing=(exp)=>{
setEditId(exp.id);
setValue('fullName',exp.fullName);
setValue("email",exp.email);
setValue("phoneNumber",exp.phoneNumber);
setValue("queryType",exp.queryType);
setValue("message",exp.message);
}


const Cancelling=()=>{
    reset();
    setEditId(null);
}

const updatingData=(data)=>{
    dispatch(editContactUsData({id:editId,...data}));
    reset();
    setEditId(null);
}


const ClearData=(id)=>{
   dispatch(deleteContactUsData(id));
}



    return (
   <>
   <div className='contactus-retrieve'>
      <h2 className='heading-retrieve'>Contact Us Users Global Data</h2>
    <div className='contactus-retrieve-master'>
    {
       ContactUsUsers.map((user)=>(
        <div className='handling' key={user.id}>
            {
           editId===user.id?(
        <div className="Contact-Us-Container retrievedata">
      <div className="contactus-master-cont">
      <div className="contactus-heading">
        <h2 className="contactus-heading-content">Get in Touch</h2>
      </div>
      <div className="contactus-form">
        <form className="form-content-container" onSubmit={handleSubmit(updatingData)}>
          <div className="form-div">
            <label className="field-label">Full Name</label>
            <input
            className="field-input"
              type="text"
              placeholder="Enter Your First Name"
              {...register("fullName", {
                required: {
                  value: true,
                  message: "First Name is  Required",
                },
              })}
            />
            <p className="field-error-message">{errors.fullName?.message}</p>
          </div>

          <div className="form-div">
            <label className="field-label">Email</label>
            <input
             className="field-input"
              type="text"
              placeholder="Enter Your Last Name"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is  Required",
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid Email Format",
                },
                validate: (value) => {
                  if (!value.includes("@")) {
                    return "Email must include @";
                  }
                  return true;
                },
              })}
            />
            <p className="field-error-message">{errors.email?.message}</p>
          </div>
          <div className="form-div">
            <label className="field-label">Phone Number</label>
            <input
             className="field-input"
              type="number"
              placeholder="Enter Your Phone Number"
              {...register("phoneNumber", {
                required: {
                  value: true,
                  message: "Phone Number is  Required",
                },
                minLength: {
                  value: 11,
                  message: "Enter the Complete 11 numbers",
                },
                validate: {
                  notCorrect: (fieldValue) => {
                    return (
                      !fieldValue.startsWith("042") || "Phone Number should not start with 042"
                    );
                  },
                },
              })}
            />
            <p className="field-error-message">{errors.phoneNumber?.message}</p>
          </div>

          <div className="form-div">
            <label className="field-label">Query Type</label>
            <select
             className="field-input"
              {...register("queryType", {
                required: {
                  value: true,
                  message: " Query Must Be specified: ",
                },
              })}
            >
              <option>Booking Issue</option>
              <option>Payment/ Refund</option>
              <option>Seat Selection Problem</option>
              <option>PromoCode</option>
              <option>Technical Issue</option>
              <option>General Inquiry</option>
            </select>
            <p className="field-error-message">{errors.queryType?.message}</p>
          </div>

          <div className="form-div">
            <label className="field-label">Message</label>
            <textarea
             className="field-input"
              {...register("message", {
                required: {
                  value: true,
                  message: "Message is required",
                },
                minLength: {
                  value: 15,
                  message: "Message Should be of Length 15",
                },
              })}
              type="text"
              placeholder="Enter the Message"
            />
            <p className="field-error-message">{errors.message?.message}</p>
          </div>
          <div className="btn-styling-form">
          <button type='submit' className="form-btn">Update</button>
          <button 
          onClick={()=>Cancelling()} className="form-btn">Cancel</button>
          <div>
          
          {isSubmitSuccessful && <p className="success-message"> Thank you! Your request has been submitted.
Our support team will get back to you within 1–3 hours.</p>}
         </div>
          </div>
        </form>
      </div>
      </div>
    </div>
           ):    
      <div className='contact-retrieve-data-container'>
        <p  className='cont-retrieve-data-para'><span className='cont-retrieve-data'>User ID: </span>{user.id}</p>
        <p className='cont-retrieve-data-para'><span className='cont-retrieve-data'>Full Name: </span>{user.fullName}</p>
        <p className='cont-retrieve-data-para'><span className='cont-retrieve-data'>Email: </span>{user.email}</p>
        <p className='cont-retrieve-data-para'><span className='cont-retrieve-data'>Query type: </span>{user.queryType}</p>
        <p className='cont-retrieve-data-para'><span className='cont-retrieve-data'>Phone Number: </span>{user.phoneNumber}</p>
        <p className='cont-retrieve-data-para'><span className='cont-retrieve-data'>Message: </span>{user.message}</p>
        <div className='retrieve-btn-div'>
            <button className="form-btn retrieve" onClick={()=>setEditing(user)}>Edit</button>
            <button className="form-btn retrieve" onClick={()=>ClearData(user.id)}>Delete Data</button>
        </div>
        </div>
            }
           
    </div>
    ))}
        </div>
   </div>
   </>
  )
}

export default ContactUsRetrieveData