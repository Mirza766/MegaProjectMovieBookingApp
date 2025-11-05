import { combineReducers } from "redux";
import { ContactUsFormData } from "../redux/ContactUs/ContactUsReducer";
import { SignUpFormData } from "../redux/SignUp/SignUpReducers";

export default combineReducers({
    ContactUsFormData,
    SignUpFormData
})

