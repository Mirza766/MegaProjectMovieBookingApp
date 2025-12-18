import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'react-datepicker/dist/react-datepicker.css';
import {createBrowserRouter,  createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lazy } from 'react'
import 'remixicon/fonts/remixicon.css';
import FeedbackForm from './components/homepagecontent/FeedbackDataEntery';
import StoryPage from './components/homepagecontent/StoryPage';

import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import TimeLine from './components/homepagecontent/TimeLine';
import TimelineConnectPage from './components/homepagecontent/TimelineConnectPage';
import TermsAndCondition from './components/homepagecontent/TermsAndCondition';
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
const Feedback=lazy(()=>import('./components/homepagecontent/Feedback'))

function App() {
  const [count, setCount] = useState(0)
//ClientProvider for Search Movie
const queryclient=new QueryClient();
  const router=createBrowserRouter(
    createRoutesFromElements(
      <> 
   <Route element={<Layout/>} errorElement={<ErrorBoundary/>}>

    <Route path='/' element={<HomeContent/>} errorElement={<ErrorBoundary/>}/>
    <Route path='/about' element={<AboutUs/> } errorElement={<ErrorBoundary/>}/>
    <Route path='/contact' element={<ContactUs/>} errorElement={<ErrorBoundary/>}/>
     <Route path='/signup' element={<SignUpPage/>} errorElement={<ErrorBoundary/>}/>
     <Route path='/login' element={<Login/>} errorElement={<ErrorBoundary/>}/>
     <Route path='/contactusdata' element={<ContactUsRetrieveData/>}/>
     <Route path='/contactusedit/:id' element={<EditData/>} errorElement={<ErrorBoundary/>}/>
     <Route path='/signUpPage' element={<SignUpPageDataRetrievel/>}/>
     <Route path='/loginPage' element={<LoginPageDataRetrieval/>} errorElement={<ErrorBoundary/>}/>
    <Route path='/search-movie' element={<SearchMovie/>} errorElement={<ErrorBoundary/>}/>
    <Route path='/buy-movie' element={<MovieStore/>} errorElement={<ErrorBoundary/>}/>
    <Route path='/cartData' element={<MovieCart/>} errorElement={<ErrorBoundary/>}/>
   <Route path='/subscpage' element={<SubscriptionPage/>} errorElement={<ErrorBoundary/>}/>
   <Route path='bookmovie' element={<BookingPage/>} errorElement={<ErrorBoundary/>}/>
    <Route path='/dataentrycont' element={<SubscriptionDataRetrieval/>} errorElement={<ErrorBoundary/>}/>
   <Route path='/bookDataRetrieve' element={<BookingDataRetrival/>} errorElement={<ErrorBoundary/>}/>
   <Route path='/feedback' element={<Feedback/>} errorElement={<ErrorBoundary/>}/>
  <Route path='/feedbackdataenter' element={<FeedbackForm/>}/>
  <Route path='/timeline' element={<TimeLine/>}/>
   <Route path='/story' element={<StoryPage/>}/>
  <Route path='/connectpage/:id' element={<TimelineConnectPage/>}/>
  <Route path='/termandcond' element={<TermsAndCondition/>}/>
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
