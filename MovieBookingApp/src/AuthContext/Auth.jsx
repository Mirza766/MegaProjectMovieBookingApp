import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';


export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState();
    const [bookingUser,setBookingUser]=useState([]);
    const [contactUser,setContactUser]=useState([]);
    const [bookedCallData,setBookedCallData]=useState();
    const [subscData,setSubscData]=useState();
    const [cartData,setCartData]=useState();
    const storetokeninLocal = (token) => {
        setToken(token);
        return localStorage.setItem('token', token);
    };

    let isLoggedIn = !!token;

    const logoutUser = () => {
        setToken('');
        setUser(null);
        return localStorage.removeItem("token");
    };

    const userAuthentication = async () => {
        if (!token) return;
        try {
            const response = await fetch('http://localhost:5000/api/auth/user', {
                method: 'GET',
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.ok) {
                const data = await response.json();
                setUser(data.userData);
            }
        } catch (error) {
            console.error("Error Fetching Data", error);
        }
    };

const ContactData=async()=>{
       if (!token) return;
        try {
            const response = await fetch('http://localhost:5000/api/form/getcontact', {
                method: 'GET',
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.ok) {
                const data = await response.json();
                setContactUser(data);
                console.log("Contact Data: ",data);
            }
        } catch (error) {
            console.error("Error Fetching Data", error);
        }
}

const getCartData=async()=>{
       if (!token) return;
        try {
            const response = await fetch('http://localhost:5000/api/cart/getorder', {
                method: 'GET',
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.ok) {
                const data = await response.json();
                setCartData(data);
                console.log("Cart Data: ",data);
            }
        } catch (error) {
            console.error("Error Fetching Data", error);
        }
}

const getCallBookingData=async()=>{
       if (!token) return;
        try {
            const response = await fetch('http://localhost:5000/api/bookcall/getbookedcall', {
                method: 'GET',
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.ok) {
                const data = await response.json();
                setBookedCallData(data);
                console.log("Booked Call Data: ",data);
            }
        } catch (error) {
            console.error("Error Fetching Data", error);
        }
}

    const bookingData=async()=>{
         if (!token) return;
        try {
            const response = await fetch('http://localhost:5000/api/book/getbooking', {
                method: 'GET',
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.ok) {
                const data = await response.json();
                setBookingUser(data);
                console.log("Booking Data: ",data);
            }
        } catch (error) {
            console.error("Error Fetching Data", error);
        }
    }


        const SubscriptionData=async()=>{
         if (!token) return;
        try {
            const response = await fetch('http://localhost:5000/api/subscription/getsubscription', {
                method: 'GET',
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.ok) {
                const data = await response.json();
                setSubscData(data);
                console.log("Booking Data: ",data);
            }
        } catch (error) {
            console.error("Error Fetching Data", error);
        }
    }

    useEffect(() => { 
        getCartData();
         ContactData();
        userAuthentication();
        bookingData();
        getCallBookingData();
        SubscriptionData();
    }, [token]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, storetokeninLocal, logoutUser, user,bookingUser,getCartData, 
        bookingData, 
        ContactData,contactUser,cartData,getCallBookingData,bookedCallData,subscData,SubscriptionData}}>
            {children}
        </AuthContext.Provider>
    );
};
