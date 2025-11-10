import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'react-datepicker/dist/react-datepicker.css';
import {createBrowserRouter,  createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lazy } from 'react'
import 'remixicon/fonts/remixicon.css';



const SearchMovie=lazy(()=>import('./components/SearchMovie/SearchMovie'))
const HomeContent=lazy(()=>import('./components/homepagecontent/HomeContent'))
const Layout=lazy(()=>import('./components/OverallLayout/Layout'))
const AboutUs=lazy(()=>import('./components/NavbarComponents/AboutUs'))
const ContactUs=lazy(()=>import('./components/NavbarComponents/ContactUs'))
const SignUpPage=lazy(()=>import('./components/NavbarComponents/SignUpPage/SignUpPage'))
const Login=lazy(()=>import('./components/NavbarComponents/Login'))
const ContactUsRetrieveData=lazy(()=>import('./components/FormDataRetrieval/ContactUsRetrieveData'));
const EditData=lazy(()=>import('./components/FormDataRetrieval/EditData'))
const SignUpPageDataRetrievel=lazy(()=>import('./components/FormDataRetrieval/SignUpPageDataRetrievel'))
const LoginPageDataRetrieval=lazy(()=>import('./components/FormDataRetrieval/LoginPageDataRetrieval'))
const MovieStore=lazy(()=>import('./components/MovieStore/MovieStore'))
const MovieCart=lazy(()=>import('./components/MovieStore/MovieCart'))
const SubscriptionPage=lazy(()=>import('./components/Subscription/SubscriptionPageDataEntry'))
const SubscriptionDataRetrieval=lazy(()=>import('./components/FormDataRetrieval/SubscriptionPageDataRetrieval'))
const BookingPage=lazy(()=>import('./components/Booking/BookingPage'));
const BookingDataRetrival=lazy(()=>import('./components/FormDataRetrieval/BookingDataRetrival'))


function App() {
  const [count, setCount] = useState(0)
//ClientProvider for Search Movie
const queryclient=new QueryClient();
  const router=createBrowserRouter(
    createRoutesFromElements(
      <> 
   <Route element={<Layout/>}>

    <Route path='/' element={<HomeContent/>}/>
    <Route path='/about' element={<AboutUs/>}/>
    <Route path='/contact' element={<ContactUs/>}/>
     <Route path='/signup' element={<SignUpPage/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/contactusdata' element={<ContactUsRetrieveData/>}/>
     <Route path='/contactusedit/:id' element={<EditData/>}/>
     <Route path='/signUpPage' element={<SignUpPageDataRetrievel/>}/>
     <Route path='/loginPage' element={<LoginPageDataRetrieval/>}/>
    <Route path='/search-movie' element={<SearchMovie/>}/>
    <Route path='/buy-movie' element={<MovieStore/>}/>
    <Route path='/cartData' element={<MovieCart/>}/>
   <Route path='/subscpage' element={<SubscriptionPage/>}/>
   <Route path='bookmovie' element={<BookingPage/>}/>
    <Route path='/dataentrycont' element={<SubscriptionDataRetrieval/>}/>
   <Route path='/bookDataRetrieve' element={<BookingDataRetrival/>}/>
    </Route>
   
      </>
    )
  )



  return (
    <QueryClientProvider client={queryclient}>

   <RouterProvider  router={router}/>
    </QueryClientProvider>
  )
}

function wait(time){
  return new Promise(resolve=>{
    setTimeout(resolve,time)
  })
}

export default App
