import { ContactUsFormData } from "../../redux/ContactUs/ContactUsReducer"
import { SignUpFormData } from "../../redux/SignUp/SignUpReducers";

export const saveState=(data)=>{
    try{
    const stateToSave={
        ContactUsFormData:data.ContactUsFormData,
        SignUpFormData:data.SignUpFormData,
    };
    localStorage.setItem("appData",JSON.stringify(stateToSave));

    }
    catch(err){
        console.error("Local Storage Error: ",err)
    }
}