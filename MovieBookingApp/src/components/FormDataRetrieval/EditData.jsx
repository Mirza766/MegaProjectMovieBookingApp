      
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { ContactUsFormData } from '../../redux/ContactUs/ContactUsReducer'
import { editContactUsData,deleteContactUsData,emptyContactUsData } from '../../redux/ContactUs/ContactUsActions';
import {useNavigate,useParams} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import "../stylingSheets/ContactUs.css";


function EditData() {


const {formState, register,handleSubmit,setValue } = useForm();

  
const { errors,isSubmitting,isSubmitSuccessful } = formState;

const dispatch=useDispatch();
const navigate=useNavigate();
  const {id}=useParams();
  const ContactUsUsers=useSelector((state)=>state.ContactUsFormData);
  console.log(ContactUsUsers);

const userData=ContactUsUsers.find((u)=>u.id===id);


useEffect(()=>{
if (userData){
    setValue('fullName',userData.fullName);
    setValue("email",userData.email);
    setValue("phoneNumber",userData.phoneNumber);
    setValue("queryType",userData.queryType);
    setValue("message",userData.message);
}
},[setValue,userData])

if(!userData){
   return <div>User Data Not Found</div>
}



const updatingData=(data)=>{
    dispatch(editContactUsData({id,...data}));
    navigate("/contactusdata")
}



  return (
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
          onClick={()=>navigate("/")} className="form-btn">Cancel</button>
          <div>
          
          {isSubmitSuccessful && <p className="success-message"> Thank you! Your request has been submitted.
Our support team will get back to you within 1–3 hours.</p>}
         </div>
          </div>
        </form>
      </div>
      </div>
    </div>

  )
}

export default EditData