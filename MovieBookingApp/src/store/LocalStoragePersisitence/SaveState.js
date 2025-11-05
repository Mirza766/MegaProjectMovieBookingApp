import { ContactUsFormData } from "../../redux/ContactUs/ContactUsReducer"

export const saveState=(data)=>{
    try{
    const stateToSave={
        ContactUsFormData:data.ContactUsFormData
    };
    localStorage.setItem("appData",JSON.stringify(stateToSave));

    }
    catch(err){
        console.error("Local Storage Error: ",err)
    }
}