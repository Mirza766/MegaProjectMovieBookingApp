import { combineReducers } from "redux";
import { ContactUsFormData } from "../redux/ContactUs/ContactUsReducer";
import {SignUpFormData } from "../redux/SignUp/SignUpReducers";
import { LoginFormData } from "../redux/Login/LoginReducers";

export default combineReducers({
    ContactUsFormData,
    SignUpFormData,
    LoginFormData
})

