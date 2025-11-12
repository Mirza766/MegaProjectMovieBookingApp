import React from "react";
import { useForm } from "react-hook-form";
import "../stylingSheets/ContactUs.css";
import {useDispatch} from 'react-redux';


import { addContactUsData } from "../../redux/ContactUs/ContactUsActions";
import ContactUsRetrieveData from "../FormDataRetrieval/ContactUsRetrieveData";
import { Link } from "react-router-dom";


function ContactUs() {
  const { reset, formState, register, setError, handleSubmit } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      queryType: "Booking Issue",
      message: "",
    },
    mode: "onChange",
  });

const dispatch=useDispatch();

  const { errors,isSubmitting,isSubmitSuccessful } = formState;

  const onSubmission = async(data) => {
    try{
      await new Promise((resolve)=>setTimeout(resolve,1000));
      console.log("Form Submitted Successfully: ", data);
      const SubmittedDataArray=dispatch(addContactUsData(data));
      console.log('Global Data is: ',SubmittedDataArray)
      reset();
    }
    catch(error){
      console.log('Error is: ', error.message)
    }
  };

  return (
    <div className="Contact-Us-Container">
      <div className="contactus-master-cont">
      <div className="contactus-heading">
        <h2 className="contactus-heading-content">Get in Touch</h2>
      </div>
      <div className="contactus-form">
        <form className="form-content-container" onSubmit={handleSubmit(onSubmission)}>
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
          <button className="form-btn">{isSubmitting? 'Loading....':'Submit'}</button>
          <div>
           <Link to='/contactusdata'>See All Contact Us Data here</Link>
          {isSubmitSuccessful && <p className="success-message"> Thank you! Your request has been submitted.
Our support team will get back to you within 1–3 hours.</p>}
         </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}

export default ContactUs;
